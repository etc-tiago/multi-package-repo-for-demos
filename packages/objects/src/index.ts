import slugify from 'slugify';

// @param obj - Objeto que contem atributos
export const object = (obj: any) => ({
  /**
   * Valida se todos os atributos existem no objeto
   * @param attrs - Array com os nomes de atributos a serem verificados
   * @return True|False
   */
  has: (attrs: string[]): boolean => {
    let valid = true;
    attrs.map((attr: any) => {
      if (!obj.hasOwnProperty(attr)) {
        valid = false;
      }
    });
    return valid;
  },
  /**
   * Retorna os atributos de um objeto
   * @param attrs - Array com os nomes de atributos a serem selecionados
   */
  getValid: (attrs: string[]): any => {
    const data: any = {};
    attrs.map((attr: string) => {
      if (obj.hasOwnProperty(attr) && attr === slugify(attr)) {
        data[attr] = obj[attr];
      }
    });
    return data;
  },
  /**
   * Retorna os atributos de um objeto
   */
  getAttrs: (): any => {
    const data: any = {};
    const attrs = Object.keys(obj);
    attrs.map((attr: string) => {
      if (obj.hasOwnProperty(attr) && attr === slugify(attr)) {
        if (obj[attr] || obj[attr] === 0 || obj[attr] === false) {
          data[attr] = obj[attr];
        }
      }
    });
    return data;
  },
  /**
   * Clear null objects from array
   */
  clear: () => obj.filter((a: any) => a),
  /**
   * Get key of object
   */
  keys: () => Object.keys(obj),
  /**
   * Get attributs with changes
   */
  getAttrChanged: (objectA: any, objectB: any): any => {
    const newObj = { ...objectA, ...objectB };
    // get new keys
    const keyA = Object.keys(objectA);
    const keyB = Object.keys(objectB);

    keyA.forEach((key: any) => {
      if (objectA[key] === objectB[key]) {
        delete objectB[key];
        delete objectB[key];
        delete newObj[key];
      }
    });

    keyB.forEach((key: any) => {
      if (objectA[key] === objectB[key]) {
        delete objectB[key];
        delete objectB[key];
        delete newObj[key];
      }
    });

    return newObj;
  },
  hasChildren: () => obj.length > 0,
  checkChildrenString: () => obj.filter((item: any) => !(typeof item === 'string') || !item).length < 1,
});

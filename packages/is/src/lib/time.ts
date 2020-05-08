/* The first number (hours) is either: a number between 0 and 19 --> [0-1]?[0-9] (allowing single digit number)
or a number between 20 - 23 --> 2[0-3]
the second number (minutes) is always a number between 00 and 59 --> [0-5][0-9] (not allowing a single digit) */

export const isTime = (time: string): boolean => {
  /* Check patter on regex */
  if (!/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(time)) {
    return false;
  }
  /* Check value by numbers */
  const split = time.split(':');
  if (parseInt(split[0], 10) > 24 || parseInt(split[0], 10) > 59) {
    return false;
  }
  return true;
};

const strongPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,32})/;
const mediumPass = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,32})/;
const softPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,32}$/;

export const isStrongPassword = (password: string) => strongPass.test(password);
export const isMediumPassword = (password: string) => mediumPass.test(password);
export const isSafePassword = (password: string) => softPass.test(password) || isMediumPassword(password) || isStrongPassword(password);

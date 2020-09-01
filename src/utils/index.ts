export const isEmpty = (str: string) =>
  str === '' || str === null || str === undefined;

export const isNotEmpty = (str: string) => !isEmpty(str);

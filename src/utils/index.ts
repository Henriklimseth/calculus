export const isNotEmpty = (str: string) => !isEmpty(str);

const isEmpty = (str: string) =>
  str === '' || str === null || str === undefined;

export const canBeNumber = (value: unknown) => !isNaN(Number(value));

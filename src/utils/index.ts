export const isNotEmpty = (str: string) => !isEmpty(str);

const isEmpty = (str: string) =>
  str === '' || str === null || str === undefined;

export const findHighestPrecision = (floats: number[]) => {
  const precisions = floats
    .map(x => x.toString().split('.')[1])
    .filter(isNotEmpty)
    .map(x => x.length);
  return precisions.length > 0 ? Math.max(...precisions) : 0;
};

import { IPolynomialComponent } from './parseExpression';
import { isNotEmpty } from '.';

export const polynomialToString = (p: IPolynomialComponent[]) =>
  p
    .map((x, i) => {
      const coefficient =
        i === 0 ? x.coefficient.toString() : extractCoefficient(x);
      switch (x.exponent) {
        case 0:
          return coefficient;
        case 1:
          return `${coefficient}x`;
        default:
          return `${coefficient}x^${x.exponent}`;
      }
    })
    .join(' ');

const extractCoefficient = (x: IPolynomialComponent) =>
  x.coefficient > 0 ? `+ ${x.coefficient}` : `- ${-x.coefficient}`;

const findPrecision = (p: IPolynomialComponent[]) => {
  const precisions = p
    .map(x => x.coefficient.toString().split('.')[1])
    .filter(isNotEmpty)
    .map(x => x.length);
  return Math.max(...precisions);
};

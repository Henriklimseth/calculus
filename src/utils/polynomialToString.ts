import { IPolynomialComponent } from './parseExpression';
import { extractCoefficient } from './coefficient';
import { canBeNumber } from '.';

export const polynomialToString = (
  p: IPolynomialComponent[],
  variable: string
) =>
  p
    .map((x, i) => {
      const coefficient =
        i === 0 ? x.coefficient.toString() : extractCoefficient(x);
      switch (x.exponent) {
        case 0:
          return coefficient;
        case 1:
          return canBeNumber(coefficient)
            ? `${coefficient}${variable}`
            : `\\left( ${coefficient} \\right) ${variable}`;
        default:
          return `${coefficient}${variable}^${x.exponent}`;
      }
    })
    .join(' ');

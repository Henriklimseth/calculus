import {
  parseExpressionToPolynomial,
  IPolynomialComponent
} from '../utils/parseExpression';
import { isNotEmpty } from '../utils';

export const differentiate = (
  rawExpression: string,
  differentiationVariable: string
) => {
  const polynomial = parseExpressionToPolynomial(
    rawExpression,
    differentiationVariable
  );
  // const precision = findPrecision(polynomial);
  // console.log(precision);
  const differentiated = differentiatePolynomial(polynomial);

  return polynomialToString(differentiated);
};

const polynomialToString = (p: IPolynomialComponent[]) =>
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
    .join('');

const extractCoefficient = (x: IPolynomialComponent) =>
  x.coefficient > 0 ? `+${x.coefficient}` : `${x.coefficient}`;

const findPrecision = (p: IPolynomialComponent[]) => {
  const precisions = p
    .map(x => x.coefficient.toString().split('.')[1])
    .filter(isNotEmpty)
    .map(x => x.length);
  return Math.max(...precisions);
};

const differentiatePolynomial = (p: IPolynomialComponent[]) =>
  p.map(differentiatePolynomialComponent).filter(x => x.coefficient !== 0);

const differentiatePolynomialComponent = (p: IPolynomialComponent) =>
  p.exponent === 0
    ? { coefficient: 0, exponent: 0 }
    : { coefficient: p.coefficient * p.exponent, exponent: p.exponent - 1 };

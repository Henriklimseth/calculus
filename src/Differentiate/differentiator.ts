import {
  parseExpressionToPolynomial,
  IPolynomialComponent
} from '../utils/parseExpression';
import { polynomialToString } from '../utils/polynomialToString';
import { findHighestPrecision } from '../utils';

export const differentiate = (
  rawExpression: string,
  differentiationVariable: string
) => {
  const polynomial = parseExpressionToPolynomial(
    rawExpression,
    differentiationVariable
  );
  const precision = findHighestPrecision(polynomial.map(x => x.coefficient));
  const differentiated = differentiatePolynomial(polynomial);

  return polynomialToString(differentiated, precision);
};

const differentiatePolynomial = (p: IPolynomialComponent[]) =>
  p.map(differentiatePolynomialComponent).filter(x => x.coefficient !== 0);

const differentiatePolynomialComponent = (p: IPolynomialComponent) =>
  p.exponent === 0
    ? { coefficient: 0, exponent: 0 }
    : { coefficient: p.coefficient * p.exponent, exponent: p.exponent - 1 };

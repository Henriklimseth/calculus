import {
  parseExpressionToPolynomial,
  IPolynomialComponent
} from '../utils/parseExpression';
import { polynomialToString } from '../utils/polynomialToString';
import { findHighestPrecision } from '../utils';

export const integrate = (
  rawExpression: string,
  integrationVariable: string
) => {
  const polynomial = parseExpressionToPolynomial(
    rawExpression,
    integrationVariable
  );
  const precision = findHighestPrecision(polynomial.map(x => x.coefficient));
  const differentiated = integratePolynomial(polynomial);

  return `${polynomialToString(differentiated, precision)} + C`;
};

const integratePolynomial = (p: IPolynomialComponent[]) =>
  p.map(integratePolynomialComponent).filter(x => x.coefficient !== 0);

const integratePolynomialComponent = (p: IPolynomialComponent) => ({
  exponent: p.exponent + 1,
  coefficient: p.coefficient / (p.exponent + 1)
});

import {
  parseExpressionToPolynomial,
  IPolynomialComponent
} from '../utils/parseExpression';
import { polynomialToString } from '../utils/polynomialToString';

export const integrate = (
  rawExpression: string,
  integrationVariable: string
) => {
  const polynomial = parseExpressionToPolynomial(
    rawExpression,
    integrationVariable
  );
  // const precision = findPrecision(polynomial);
  // console.log(precision);
  const differentiated = integratePolynomial(polynomial);

  return `${polynomialToString(differentiated)} + C`;
};

const integratePolynomial = (p: IPolynomialComponent[]) =>
  p.map(integratePolynomialComponent).filter(x => x.coefficient !== 0);

const integratePolynomialComponent = (p: IPolynomialComponent) => ({
  exponent: p.exponent + 1,
  coefficient: p.coefficient / (p.exponent + 1)
});

import {
  parseExpressionToPolynomial,
  IPolynomialComponent,
} from '../utils/parseExpression';
import { polynomialToString } from '../utils/polynomialToString';
import { divideCoefficients } from '../utils/coefficient';

export const integrate = (
  rawExpression: string,
  integrationVariable: string
) => {
  const polynomial = parseExpressionToPolynomial(
    rawExpression,
    integrationVariable
  );
  const integrated = integratePolynomial(polynomial);

  return `${polynomialToString(integrated, integrationVariable)} + C`;
};

const integratePolynomial = (p: IPolynomialComponent[]) =>
  p.map(integratePolynomialComponent).filter((x) => x.coefficient !== 0);

const integratePolynomialComponent = (p: IPolynomialComponent) => ({
  exponent: p.exponent + 1,
  coefficient: divideCoefficients({
    numerator: p.coefficient,
    denominator: p.exponent + 1,
  }),
});

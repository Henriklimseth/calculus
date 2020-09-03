import {
  parseExpressionToPolynomial,
  IPolynomialComponent,
} from '../utils/parseExpression';
import { polynomialToString } from '../utils/polynomialToString';
import { multiplyCoefficients } from '../utils/coefficient';

export const differentiate = (
  rawExpression: string,
  differentiationVariable: string
) => {
  const polynomial = parseExpressionToPolynomial(
    rawExpression,
    differentiationVariable
  );
  const differentiated = differentiatePolynomial(polynomial);

  return polynomialToString(differentiated, differentiationVariable);
};

const differentiatePolynomial = (p: IPolynomialComponent[]) =>
  p.map(differentiatePolynomialComponent).filter((x) => x.coefficient !== 0);

const differentiatePolynomialComponent = (p: IPolynomialComponent) =>
  p.exponent === 0
    ? { coefficient: 0, exponent: 0 }
    : {
        coefficient: multiplyCoefficients(p.coefficient, p.exponent),
        exponent: p.exponent - 1,
      };

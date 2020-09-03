import { symbols } from '../constants';
import { isNotEmpty, canBeNumber } from '.';
import { Coefficient, addCoefficients } from './coefficient';

export const parseExpressionToPolynomial = (
  expressionString: string,
  variable: string
) => {
  const polynomial = extractPolynomial(expressionString, variable);

  return simplifyPolynomial(polynomial);
};

const extractPolynomial = (expressionString: string, variable: string) => {
  const rawPolynomialComponents = extractArray(expressionString);
  const polynomialExponentRegex = new RegExp(`${variable}\\^[0-9]+`, 'g');

  return rawPolynomialComponents.reduce(
    (acc: IPolynomialComponent[], rawComponent) => {
      const matchedPolynomialExponent = rawComponent.match(
        polynomialExponentRegex
      );
      if (matchedPolynomialExponent) {
        const coefficient = extractCoefficient(rawComponent, variable);
        const exponent = Number(rawComponent.split('^')[1]);
        return [...acc, { exponent, coefficient }];
      } else if (rawComponent.match(variable)) {
        const coefficient = extractCoefficient(rawComponent, variable);
        return [...acc, { exponent: 1, coefficient }];
      } else if (canBeNumber(rawComponent)) {
        return [...acc, { exponent: 0, coefficient: Number(rawComponent) }];
      }
      return [...acc, { exponent: 0, coefficient: rawComponent }];
    },
    []
  );
};

const simplifyPolynomial = (p: IPolynomialComponent[]) =>
  p.reduce(simplifyReducer, []).filter((x) => x.coefficient !== 0);

const simplifyReducer = (
  accumulator: IPolynomialComponent[],
  current: IPolynomialComponent
) => {
  const existing = accumulator.find((x) => x.exponent === current.exponent);
  return existing
    ? [
        ...accumulator.filter((x) => x.exponent !== current.exponent),
        {
          ...existing,
          coefficient: addCoefficients(
            existing.coefficient,
            current.coefficient
          ),
        },
      ]
    : [...accumulator, current];
};

const extractCoefficient = (rawComponent: string, variable: string) => {
  const maybeCoefficient = rawComponent.split(variable)[0];
  switch (maybeCoefficient) {
    case '':
      return 1;
    case '-':
      return -1;
    default:
      return Number(maybeCoefficient);
  }
};

const extractArray = (expressionString: string) => {
  const stripped = removeSpaces(expressionString);
  const plusArray = stripped.split(symbols.plus);
  const polynomialComponents = plusArray.flatMap((partialExpression) => {
    const minusPartial = partialExpression.split(symbols.minus);
    return minusPartial.length > 0
      ? minusPartial.map((y, i) => (i === 0 ? y : `-${y}`))
      : minusPartial;
  });
  return polynomialComponents.filter(isNotEmpty);
};

const removeSpaces = (x: string) => x.split(' ').join('');

export interface IPolynomialComponent {
  exponent: number;
  coefficient: Coefficient;
}

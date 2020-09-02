import { IPolynomialComponent } from './parseExpression';

export const polynomialToString = (
  p: IPolynomialComponent[],
  precision: number
) =>
  p
    .map((x, i) => {
      const coefficient =
        i === 0 ? x.coefficient.toString() : extractCoefficient(x, precision);
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

const extractCoefficient = (x: IPolynomialComponent, toPrecision: number) =>
  x.coefficient > 0
    ? `+ ${roundOff({ num: x.coefficient, toPrecision })}`
    : `- ${roundOff({ num: -x.coefficient, toPrecision })}`;

const roundOff = ({
  num,
  toPrecision: precision
}: {
  num: number;
  toPrecision: number;
}) => num.toString(); //removeTrailingZeros(num.toFixed(precision));

const removeTrailingZeros = (numberString: string): string => {
  const { length } = numberString;
  switch (numberString[length - 1]) {
    case '0':
      return removeTrailingZeros(numberString.slice(length - 1));
    case '.':
      return numberString.slice(length - 1);
    default:
      return numberString;
  }
};

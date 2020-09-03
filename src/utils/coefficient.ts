import { times, divide } from './latex';
import { Fraction } from '../types';
import { IPolynomialComponent } from './parseExpression';

export type Coefficient = number | string;

export const addCoefficients = (c1: Coefficient, c2: Coefficient) =>
  isCoefficientNumber(c1) && isCoefficientNumber(c2)
    ? c1 + c2
    : `${c1} + ${c2}`;

export const multiplyCoefficients = (c1: Coefficient, c2: Coefficient) =>
  isCoefficientNumber(c1) && isCoefficientNumber(c2) ? c1 * c2 : times(c1, c2);

export const divideCoefficients = ({ numerator, denominator }: Fraction) =>
  isCoefficientNumber(numerator) && isCoefficientNumber(denominator)
    ? numerator / denominator
    : denominator === 1
    ? numerator
    : divide({ numerator, denominator });

export const extractCoefficient = (x: IPolynomialComponent) => {
  const { coefficient } = x;
  return isCoefficientNumber(coefficient) && coefficient < 0
    ? ` ${coefficient.toString()}`
    : `+ ${coefficient}`;
};

const isCoefficientNumber = (coefficient: Coefficient): coefficient is number =>
  typeof coefficient === 'number';

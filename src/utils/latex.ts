import { Fraction } from '../types';

type PrintAble = string | number;

export const times = (x: PrintAble, y: PrintAble) => `${x}\\times ${y}`;

export const divide = ({ numerator, denominator }: Fraction) =>
  `\\frac{${numerator}}{${denominator}}`;

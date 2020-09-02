import React from 'react';
//@ts-ignore
import Latex from 'react-latex';

interface IProps {
  type: 'INTEGRATION' | 'DIFFERENTIATION';
  variable: string;
  inputExpression: string;
  computationResult: string;
}

export const Result = ({
  inputExpression,
  computationResult,
  type,
  variable
}: IProps) => {
  const inputOperation =
    type === 'INTEGRATION'
      ? integralOperator(inputExpression, variable)
      : differentiationOperator(inputExpression, variable);

  const result = `$$${inputOperation} = ${computationResult}$$`;

  return <Latex displayMode>{result}</Latex>;
};

const differentiationOperator = (expression: string, variable: string) =>
  `\\frac{d}{d${variable}} \\left( ${expression} \\right)`;

const integralOperator = (expression: string, variable: string) =>
  `\\int \\left( ${expression} \\right) d${variable}`;

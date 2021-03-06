import React from 'react';
import { createUseStyles } from 'react-jss';
import { blue, black } from '../colors';

interface IProps {
  expression: string;
  setExpression: (value: string) => void;
  variable: string;
  setVariable: (value: string) => void;
  label: string;
}

export const CalculationInput = ({
  expression,
  setExpression,
  variable,
  setVariable,
  label,
}: IProps) => {
  const { expressionField, variableField } = useStyles();
  return (
    <>
      <label htmlFor={`${label}Expression`}>{label}</label>
      <input
        id={`${label}Expression`}
        className={expressionField}
        value={expression}
        onChange={(e) => setExpression(e.target.value)}
      />
      <label htmlFor={`${label}Variable`}>i variabelen</label>
      <input
        id={`${label}Variable`}
        className={variableField}
        value={variable}
        onChange={(e) => setVariable(e.target.value)}
      />
    </>
  );
};

const useStyles = createUseStyles({
  inputField: {
    margin: '0 10px',
    height: '30px',
    backgroundColor: black,
    border: 'none',
    borderBottom: `1px solid ${blue}`,
    color: blue,
    lineHeight: '30px',
    fontSize: '15px',
    outline: 'none',
  },
  expressionField: {
    extend: 'inputField',
    width: '150px',
  },
  variableField: {
    extend: 'inputField',
    width: '10px',
  },
});

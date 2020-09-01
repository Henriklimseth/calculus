import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { differentiate } from './differentiator';

export const Differentiate = () => {
  const [inputExpression, setInputExpression] = useState('x^4+3x^3-4x^2-5x-1');
  const [differentiationVariable, setDifferentiationVariable] = useState('x');
  const [result, setResult] = useState('');
  const { expressionField, variableField } = useStyles();
  const onDifferentiate = () =>
    setResult(differentiate(inputExpression, differentiationVariable));
  return (
    <>
      <div>
        <label htmlFor="differentiateExpression">Deriver:</label>
        <input
          id="differentiateExpression"
          className={expressionField}
          value={inputExpression}
          onChange={e => setInputExpression(e.target.value)}
        />
        <label htmlFor="forVariable">i variabelen</label>
        <input
          id="forVariable"
          className={variableField}
          value={differentiationVariable}
          onChange={e => setDifferentiationVariable(e.target.value)}
        />
        <button onClick={onDifferentiate}>Kjør</button>
      </div>
      <div>{result && <p>{result}</p>}</div>
    </>
  );
};

const useStyles = createUseStyles({
  inputField: {
    margin: '0 10px',
    height: '20px'
  },
  expressionField: {
    extend: 'inputField',
    width: '150px'
  },
  variableField: {
    extend: 'inputField',
    width: '10px'
  }
});

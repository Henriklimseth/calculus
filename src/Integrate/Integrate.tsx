import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { integrate } from './integrator';

export const Integrate = () => {
  const [inputExpression, setInputExpression] = useState('x^4+3x^3-4x^2-5x-1');
  const [differentiationVariable, setDifferentiationVariable] = useState('x');
  const [result, setResult] = useState('');
  const { expressionField, variableField } = useStyles();
  const onDifferentiate = () =>
    setResult(integrate(inputExpression, differentiationVariable));
  return (
    <>
      <div>
        <label htmlFor="integrateExpression">Integrer:</label>
        <input
          id="integrateExpression"
          className={expressionField}
          value={inputExpression}
          onChange={e => setInputExpression(e.target.value)}
        />
        <label htmlFor="forVar">i variabelen</label>
        <input
          id="forVar"
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

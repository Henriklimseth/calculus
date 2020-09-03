import React, { useState } from 'react';
import { differentiate } from './differentiator';
import { CalculationInput } from '../CalculationInput/CalculationInput';
import { Result } from '../Result/Result';

export const Differentiate = () => {
  const [inputExpression, setInputExpression] = useState('x^4+3x^3-4x^2-5x-1');
  const [differentiationVariable, setDifferentiationVariable] = useState('x');
  const [result, setResult] = useState('');
  const onDifferentiate = () =>
    setResult(differentiate(inputExpression, differentiationVariable));
  return (
    <>
      <div>
        <CalculationInput
          label="Deriver"
          expression={inputExpression}
          setExpression={setInputExpression}
          variable={differentiationVariable}
          setVariable={setDifferentiationVariable}
        />
        <button onClick={onDifferentiate}>Kjør</button>
      </div>
      {result && (
        <Result
          type="DIFFERENTIATION"
          variable={differentiationVariable}
          inputExpression={inputExpression}
          computationResult={result}
        />
      )}
    </>
  );
};

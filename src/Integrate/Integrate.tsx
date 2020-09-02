import React, { useState } from 'react';
import { integrate } from './integrator';
import { CalculationInput } from '../CalculationInput/CalculationInput';

export const Integrate = () => {
  const [inputExpression, setInputExpression] = useState('x^4+3x^3-4x^2-5x-1');
  const [integrationVariable, setDIntegrationVariable] = useState('x');
  const [result, setResult] = useState('');
  const onIntegrate = () =>
    setResult(integrate(inputExpression, integrationVariable));
  return (
    <>
      <div>
        <CalculationInput
          label="Integrer"
          expression={inputExpression}
          setExpression={setInputExpression}
          variable={integrationVariable}
          setVariable={setDIntegrationVariable}
        />
        <button onClick={onIntegrate}>Kjør</button>
      </div>
      <div>{result && <p>{result}</p>}</div>
    </>
  );
};

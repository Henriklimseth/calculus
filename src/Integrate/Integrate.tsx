import React, { useState } from 'react';
import { integrate } from './integrator';
import { CalculationInput } from '../CalculationInput/CalculationInput';
import { Result } from '../Result/Result';

export const Integrate = () => {
  const [inputExpression, setInputExpression] = useState('4x^3+9x^2-8x-5');
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
      <div>
        {result && (
          <Result
            type="INTEGRATION"
            variable={integrationVariable}
            inputExpression={inputExpression}
            computationResult={result}
          />
        )}
      </div>
    </>
  );
};

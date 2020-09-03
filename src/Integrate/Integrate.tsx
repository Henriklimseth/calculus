import React, { useState } from 'react';
import { integrate } from './integrator';
import { CalculationInput } from '../CalculationInput/CalculationInput';
import { Result } from '../Result/Result';
import { createUseStyles } from 'react-jss';
import { Button } from '../Button/Button';

export const Integrate = () => {
  const [inputExpression, setInputExpression] = useState('4x^3+9x^2-8x-5');
  const [integrationVariable, setDIntegrationVariable] = useState('x');
  const [result, setResult] = useState('');
  const { inputContainer } = useStyles();
  const onIntegrate = () =>
    setResult(integrate(inputExpression, integrationVariable));
  return (
    <>
      <div className={inputContainer}>
        <CalculationInput
          label="Integrer"
          expression={inputExpression}
          setExpression={setInputExpression}
          variable={integrationVariable}
          setVariable={setDIntegrationVariable}
        />
        <Button label="Integrer" onClick={onIntegrate} />
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

const useStyles = createUseStyles({
  inputContainer: {
    marginTop: '30px',
  },
});

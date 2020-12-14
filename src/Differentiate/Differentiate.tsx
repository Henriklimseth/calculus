import React from 'react';
import { differentiate } from './differentiator';
import {
  add,
  constant,
  e,
  exponentiate,
  Expression,
  log,
  multiply,
  one,
  variable,
  zero,
} from '../expression/expression';
import { expressionToLatexString } from '../expression/expressionToString';
import { Result } from '../Result/Result';

export const Differentiate = () => {
  const x = variable('x');
  const logx = log(e, x);
  const three = constant(3);
  const four = constant(4);
  const pol = add(exponentiate(x, four), add(exponentiate(x, three), four));
  const expressions: Expression[] = [
    zero,
    one,
    x,
    log(e, multiply(constant(2), x)),
    multiply(constant(8), exponentiate(x, four)),
    add(exponentiate(x, four), logx),
    multiply(
      add(exponentiate(x, four), logx),
      add(exponentiate(x, three), multiply(three, x))
    ),
    exponentiate(x, pol),
    log(e, pol),
  ];

  return (
    <div>
      {expressions.map((expr) => (
        <Result
          type="DIFFERENTIATION"
          variable="x"
          inputExpression={expressionToLatexString(expr)}
          computationResult={expressionToLatexString(differentiate(expr))}
        />
      ))}
    </div>
  );
};

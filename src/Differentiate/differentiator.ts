import {
  add,
  Expression,
  constant,
  divide,
  e,
  exponentiate,
  Component,
  isExpression,
  isVariable,
  log,
  multiply,
  one,
  subtract,
  zero,
} from '../expression/expression';

export const differentiate = (component: Expression): Expression => {
  if (!isExpression(component)) {
    return isVariable(component) ? one : zero;
  }
  const { type, left, right } = component;
  switch (type) {
    case '+':
      return add(differentiate(left), differentiate(right));
    case '-':
      return subtract(differentiate(left), differentiate(right));
    case '*':
      return productRule(left, right);
    case '/':
      return divisorRule(left, right);
    case '^':
      return exponentRule(left, right);
    case 'log':
      return logRule(left, right);
  }
};

const productRule = (left: Expression, right: Expression): Expression =>
  add(
    multiply(differentiate(left), right),
    multiply(left, differentiate(right))
  );

const divisorRule = (
  numerator: Expression,
  denominator: Expression
): Component =>
  divide(
    subtract(
      multiply(differentiate(numerator), denominator),
      multiply(numerator, differentiate(denominator))
    ),
    exponentiate(denominator, constant(2))
  );

const exponentRule = (base: Expression, exponent: Expression): Expression =>
  multiply(
    add(
      exponent,
      multiply(log(e, base), multiply(differentiate(exponent), base))
    ),
    exponentiate(base, subtract(exponent, one))
  );

const logRule = (base: Expression, arg: Expression): Component =>
  // NB kun for base e
  divide(differentiate(arg), arg);

type Operation = '+' | '-' | '*' | '/' | '^' | 'log';

interface Variable {
  name: string;
}

interface Constant {
  value: number;
}

export type Expression = Constant | Variable | Component;

export interface Component {
  left: Expression;
  right: Expression;
  type: Operation;
}

export const isConstant = (expression: Expression): expression is Constant =>
  'value' in expression;

export const isVariable = (expression: Expression): expression is Variable =>
  'name' in expression;

export const isExpression = (expression: Expression): expression is Component =>
  !isConstant(expression) && !isVariable(expression);

export const variable = (name: string): Variable => ({ name });

export const constant = (num: number): Constant => ({ value: num });

export const zero = constant(0);

export const one = constant(1);

export const e = constant(Math.exp(1));

export const multiply = (left: Expression, right: Expression): Expression =>
  left === zero || right === zero
    ? zero
    : isConstant(left) && isConstant(right)
    ? constant(left.value * right.value)
    : {
        type: '*',
        left,
        right,
      };

export const divide = (
  numerator: Expression,
  denominator: Expression
): Component => ({
  type: '/',
  left: numerator,
  right: denominator,
});

export const add = (left: Expression, right: Expression): Expression =>
  left === zero
    ? right
    : right === zero
    ? left
    : isConstant(left) && isConstant(right)
    ? constant(left.value + right.value)
    : {
        type: '+',
        left,
        right,
      };

export const subtract = (left: Expression, right: Expression): Expression =>
  right === zero
    ? left
    : isConstant(right) && isConstant(left)
    ? constant(left.value - right.value)
    : {
        type: '-',
        left,
        right,
      };

export const exponentiate = (
  base: Expression,
  exponent: Expression
): Component => ({
  type: '^',
  left: base,
  right: exponent,
});

export const log = (base: Expression, arg: Expression): Component => ({
  type: 'log',
  left: base,
  right: arg,
});

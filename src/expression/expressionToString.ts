import { Expression, isExpression, isVariable } from './expression';

export const expressionToLatexString = (expression: Expression): string => {
  if (!isExpression(expression)) {
    return isVariable(expression)
      ? expression.name
      : expression.value.toString();
  }
  const { type, left, right } = expression;
  switch (type) {
    case '+':
    case '-':
      return `\\left(${expressionToLatexString(
        left
      )} ${type} ${expressionToLatexString(right)}\\right)`;
    case '*':
      return `${expressionToLatexString(left)} \\cdot ${expressionToLatexString(
        right
      )}`;
    case '/':
      return `\\frac{${expressionToLatexString(
        left
      )}}{${expressionToLatexString(right)}}`;
    case '^':
      return `${expressionToLatexString(left)}^{${expressionToLatexString(
        right
      )}}`;
    case 'log':
      return `\\log${parenthesis(expressionToLatexString(right))}`;
  }
};

const parenthesis = (clause: string) => `\\left(${clause}\\right)`;

export const expressionToString = (expression: Expression): string => {
  if (!isExpression(expression)) {
    return isVariable(expression)
      ? expression.name
      : expression.value.toString();
  }
  const { type, left, right } = expression;
  switch (type) {
    case '+':
    case '-':
    case '*':
    case '/':
    case '^':
      return `(${expressionToString(left)} ${type} ${expressionToString(
        right
      )})`;
    case 'log':
      return `log${expressionToString(right)}`;
  }
};

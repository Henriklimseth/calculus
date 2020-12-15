import {
  Expression,
  isArithmetic,
  isExpression,
  isVariable,
} from './expression';

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
      return `${expressionToLatexString(
        left
      )} ${type} ${expressionToLatexString(right)}`;
    case '*':
      const leftString = expressionToLatexString(left);
      const rightString = expressionToLatexString(right);
      return `${
        isArithmetic(left) ? parenthesis(leftString) : leftString
      } \\cdot ${isArithmetic(right) ? parenthesis(rightString) : rightString}`;
    case '/':
      return `\\frac{${expressionToLatexString(
        left
      )}}{${expressionToLatexString(right)}}`;
    case '^':
      const baseString = expressionToLatexString(left);
      return `${
        isArithmetic(left) ? parenthesis(baseString) : baseString
      }^{${expressionToLatexString(right)}}`;
    case 'log':
      return `\\log${parenthesis(expressionToLatexString(right))}`;
  }
};

const parenthesis = (clause: string) => `\\left(${clause}\\right)`;

// export const expressionToString = (expression: Expression): string => {
//   if (!isExpression(expression)) {
//     return isVariable(expression)
//       ? expression.name
//       : expression.value.toString();
//   }
//   const { type, left, right } = expression;
//   switch (type) {
//     case '+':
//     case '-':
//     case '*':
//     case '/':
//     case '^':
//       return `(${expressionToString(left)} ${type} ${expressionToString(
//         right
//       )})`;
//     case 'log':
//       return `log${expressionToString(right)}`;
//   }
// };

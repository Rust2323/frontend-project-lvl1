import gameBody from '../index.js';

import { randomizer, arifmetics } from '../utils.js';

const gameTask = 'What is the result of the expression?';

const getExpressionAndAnswer = () => {
  let answer = 0;
  const number1 = randomizer();
  const number2 = randomizer();
  const arifmetic = arifmetics();
  const expression = `${number1} ${arifmetic} ${number2}`;
  switch (arifmetic) {
    case '-':
      answer = number1 - number2;
      break;
    case '+':
      answer = number1 + number2;
      break;
    case '*':
      answer = number1 * number2;
      break;
    default:
      answer = 0;
  }
  answer = String(answer);

  return [expression, answer];
};

const brainCalc = () => {
  gameBody(gameTask, getExpressionAndAnswer);
};
export default brainCalc;

import gameBody from '../index.js';

import getRandomNumber from '../utils.js';

const task = 'What is the result of the expression?';

const arifmetics = () => {
  const arifmetic = ['+', '-', '*'];
  const countArifmetic = Math.floor(Math.random() * arifmetic.length);
  return arifmetic[countArifmetic];
};

const getQuestionAndAnswer = () => {
  let answer = '';
  const number1 = getRandomNumber();
  const number2 = getRandomNumber(1, 15);
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
      answer = null;
  }
  answer = String(answer);

  return [expression, answer];
};

const brainCalc = () => {
  gameBody(task, getQuestionAndAnswer);
};
export default brainCalc;

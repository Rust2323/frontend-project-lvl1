import gameBody from '../index.js';

import { getRandomNumber } from '../utils.js';

const task = 'What is the result of the expression?';

const getArifmeticSimbol = () => {
  const arifmetic = ['+', '-', '*'];
  const countArifmetic = getRandomNumber(0, arifmetic.length);
  return arifmetic[countArifmetic];
};

const getQuestionAndAnswer = () => {
  let answer = '';
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 15);
  const arifmetic = getArifmeticSimbol();
  const question = `${number1} ${arifmetic} ${number2}`;
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

  return [question, answer];
};

const brainCalc = () => {
  gameBody(task, getQuestionAndAnswer);
};
export default brainCalc;

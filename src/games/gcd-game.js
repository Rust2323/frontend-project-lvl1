import gameBody from '../index.js';

import getRandomNumber from '../utils.js';

const task = 'Find the greatest common divisor of given numbers.';

const getGcd = (number1, number2) => {
  if (number2 === 0) {
    return number1;
  }
  return getGcd(number2, number1 % number2);
};

const getQuestionAndAnswer = () => {
  const firstNumber = getRandomNumber(1, 30);
  const secondNumber = getRandomNumber(1, 30);
  const expression = `${firstNumber} ${secondNumber}`;

  const answer = String(getGcd(firstNumber, secondNumber));
  return [expression, answer];
};

const brainGcd = () => {
  gameBody(task, getQuestionAndAnswer);
};

export default brainGcd;

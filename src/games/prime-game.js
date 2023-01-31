import gameBody from '../index.js';

import { getRandomNumber } from '../utils.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getQuestionAndAnswer = () => {
  const number = getRandomNumber();
  let answer = 'no';
  const booleanAnswer = isPrime(number);
  if (booleanAnswer) {
    answer = 'yes';
  }

  return [number, answer];
};

const brainPrime = () => {
  gameBody(task, getQuestionAndAnswer);
};

export default brainPrime;

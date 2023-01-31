import gameBody from '../index.js';

import { getRandomNumber, getAnswer } from '../utils.js';

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
  const booleanAnswer = isPrime(number);
  const answer = getAnswer(booleanAnswer);

  return [number, answer];
};

const brainPrime = () => {
  gameBody(task, getQuestionAndAnswer);
};

export default brainPrime;

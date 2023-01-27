import gameBody from '../index.js';

import getRandomNumber from '../utils.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) {
    return 'no';
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const getQuestionAndAnswer = () => {
  const number = getRandomNumber();
  const answer = isPrime(number);

  return [number, answer];
};

const brainPrime = () => {
  gameBody(task, getQuestionAndAnswer);
};

export default brainPrime;

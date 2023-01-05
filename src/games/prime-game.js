import gameBody from '../index.js';

import { randomizer } from '../utils.js';

const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getExpressionAndAnswer = () => {
  let answer = '';
  const number = randomizer();
  if (number === 2
    || number === 3
    || number === 5
    || number === 7) {
    answer = 'yes';
  } else if ((number === 1
    || number % 2 === 0
     || number % 3 === 0
     || number % 5 === 0
     || number % 7 === 0)) {
    answer = 'no';
  } else answer = 'yes';

  return [number, answer];
};

const brainPrime = () => {
  gameBody(gameTask, getExpressionAndAnswer);
};

export default brainPrime;

import {
  gameBody, randomizer,
} from '../index.js';

const gameQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const expressionAndAnswer = () => {
  let rightAnswer = '';
  const arr = randomizer();
  const number = arr[0];
  if (number === 1) {
    rightAnswer = 'yes';
  }
  if ((number % 2 === 0
    || number % 3 === 0
    || number % 5 === 0
    || number % 7 === 0)
    && (number !== 2
      || number !== 3
      || number !== 5
      || number !== 7)
  ) {
    rightAnswer = 'no';
  } else rightAnswer = 'yes';

  return [number, rightAnswer];
};

const brainPrime = () => {
  gameBody(gameQuestion, expressionAndAnswer);
};

export default brainPrime;

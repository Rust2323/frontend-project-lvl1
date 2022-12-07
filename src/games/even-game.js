import {
  gameBody, randomizer,
} from '../index.js';

const gameQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';

const expressionAndAnswer = () => {
  const arr = randomizer();
  const expression = arr[0];
  let rightAnswer = '';
  if (expression % 2 === 0) {
    rightAnswer = 'yes';
  } else rightAnswer = 'no';
  return [expression, rightAnswer];
};

const brainEven = () => {
  gameBody(gameQuestion, expressionAndAnswer);
};

export default brainEven;

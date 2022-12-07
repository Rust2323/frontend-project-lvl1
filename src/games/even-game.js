import {
  gameBody, randomizer,
} from '../index2.js';

const gameQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';

  const expressionAndAnswer = () => {
  const arr = randomizer();
  let expression = arr[0];
  let rightAnswer = '';
  if (expression % 2 === 0) {
    rightAnswer = 'yes';
  } else rightAnswer = 'no';
  return [expression, rightAnswer];
};


  const brainEven = () => {
  gameBody (gameQuestion, expressionAndAnswer);
};

export default brainEven;

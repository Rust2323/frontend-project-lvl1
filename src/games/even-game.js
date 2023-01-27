import gameBody from '../index.js';

import getRandomNumber from '../utils.js';

const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const expression = getRandomNumber();
  const answer = isEven(expression);

  return [expression, answer];
};

const brainEven = () => {
  gameBody(task, getQuestionAndAnswer);
};

export default brainEven;

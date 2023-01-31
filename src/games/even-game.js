import gameBody from '../index.js';

import { getRandomNumber } from '../utils.js';

const isEven = (number) => (number % 2 === 0);

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const question = getRandomNumber();
  let answer = 'no';
  const booleanAnswer = isEven(question);
  if (booleanAnswer === true) {
    answer = 'yes';
  }

  return [question, answer];
};

const brainEven = () => {
  gameBody(task, getQuestionAndAnswer);
};

export default brainEven;

import gameBody from '../index.js';

import { getRandomNumber, getAnswer } from '../utils.js';

const isEven = (number) => (number % 2 === 0);

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const question = getRandomNumber();
  const booleanAnswer = isEven(question);
  const answer = getAnswer(booleanAnswer);

  return [question, answer];
};

const brainEven = () => {
  gameBody(task, getQuestionAndAnswer);
};

export default brainEven;

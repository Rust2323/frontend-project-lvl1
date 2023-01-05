import {gameBody} from '../index.js';

import {randomizer} from '../utils.js';

const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';

const getExpressionAndAnswer = () => {
  const expression = randomizer();
  const isEven = (expression) => (expression % 2 === 0? 'yes' : 'no');
  let answer = isEven(expression);
  
  return [expression, answer];
};

const brainEven = () => {
  gameBody(gameTask, getExpressionAndAnswer);
};

export default brainEven;

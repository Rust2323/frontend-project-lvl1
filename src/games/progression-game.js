import {gameBody} from '../index.js';

import {randomizer} from '../utils.js';

const gameTask = 'What number is missing in the progression?';

const getExpressionAndAnswer = () => {
  const progression = [];
  const number1 = randomizer();
  const number2 = randomizer(1, 10);
  const randomStep = randomizer(1, 10);
  const lineLength = randomizer(5, 10);

  let nextnumber = number1;
  let answer = 0;
  let maxLength = lineLength;
  if (randomStep > lineLength) {
    maxLength = randomStep;
  }
  for (let j = 0; j <= maxLength; j += 1) {
    if (j === randomStep) {
      progression.push('..');
      nextnumber += number2;
    }
    progression.push(nextnumber);
    nextnumber += number2;
  }
  answer = progression[randomStep - 1] + number2;
  if (progression[0] === '..') {
    answer = progression[1] - (progression[2] - progression[1]);
  }
  answer = String(answer);
  return [progression.join(' '), answer];
};

const brainProgression = () => {
  gameBody(gameTask, getExpressionAndAnswer);
};

export default brainProgression;

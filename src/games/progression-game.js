import {
  gameBody, randomizer,
} from '../index.js';

const gameQuestion = 'What number is missing in the progression?';

const expressionAndAnswer = () => {
  const progression = [];
  const [number1, number2, , randomStep, lineLength] = randomizer();
  let nextnumber = number1;
  let rightAnswer = 0;
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
  rightAnswer = progression[randomStep - 1] + number2;
  if (progression[0] === '..') {
    rightAnswer = progression[1] - (progression[2] - progression[1]);
  }
  rightAnswer = String(rightAnswer);
  return [progression.join(' '), rightAnswer];
};

const brainProgression = () => {
  gameBody(gameQuestion, expressionAndAnswer);
};

export default brainProgression;

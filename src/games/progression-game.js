import {
  gameBody, randomizer,
} from '../index.js';

const gameQuestion = 'What number is missing in the progression?';

const expressionAndAnswer = () => {
  const progression = [];
  const [number1, number2, , randomStep, lineLength] = randomizer();
  let nextnumber = number1;
  if (randomStep < lineLength) {
    for (let j = 0; j < lineLength; j += 1) {
      if (j === randomStep) {
        progression.push('..');
        nextnumber += number2;
      }
      progression.push(nextnumber);
      nextnumber += number2;
    }
  }
  let rightAnswer = progression[randomStep - 1] + number2;
  rightAnswer = String(rightAnswer);
  return [progression.join(' '), rightAnswer];
};

const brainProgression = () => {
  gameBody(gameQuestion, expressionAndAnswer);
};

export default brainProgression;

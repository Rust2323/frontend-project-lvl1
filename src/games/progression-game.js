import gameBody from '../index.js';

import getRandomNumber from '../utils.js';

const task = 'What number is missing in the progression?';

const createProgression = (num1, num2, dotsPlace, progressionLength) => {
  const progression = [];
  let nextnumber = num1;
  let maxLength = progressionLength;
  if (dotsPlace > progressionLength) {
    maxLength = dotsPlace;
  }
  for (let j = 0; j <= maxLength; j += 1) {
    if (j === dotsPlace) {
      progression.push('..');
      nextnumber += num2;
    }
    progression.push(nextnumber);
    nextnumber += num2;
  }

  return progression;
};

const getQuestionAndAnswer = () => {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber(1, 10);
  const randomStep = getRandomNumber(1, 10);
  const lineLength = getRandomNumber(5, 10);

  const progression = createProgression(number1, number2, randomStep, lineLength);

  let answer = progression[randomStep - 1] + number2;
  if (progression[0] === '..') {
    answer = number1;
  }

  return [progression.join(' '), String(answer)];
};

const brainProgression = () => {
  gameBody(task, getQuestionAndAnswer);
};

export default brainProgression;

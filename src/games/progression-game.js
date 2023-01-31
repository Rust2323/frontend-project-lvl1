import gameBody from '../index.js';

import getRandomNumber from '../utils.js';

const task = 'What number is missing in the progression?';

const createProgression = (startNumber, progressionStep, hiddenIndex, progressionLength) => {
  const progression = [];
  let nextnumber = startNumber;
  let maxLength = progressionLength;
  if (hiddenIndex > progressionLength) {
    maxLength = hiddenIndex;
  }
  for (let j = 0; j <= maxLength; j += 1) {
    if (j === hiddenIndex) {
      progression.push('..');
      nextnumber += progressionStep;
    }
    progression.push(nextnumber);
    nextnumber += progressionStep;
  }

  return progression;
};

const getQuestionAndAnswer = () => {
  const startNumber = getRandomNumber(1, 100);
  const progressionStep = getRandomNumber(1, 20);
  const hiddenIndex = getRandomNumber(1, 10);
  const lineLength = getRandomNumber(5, 9);

  const progression = createProgression(startNumber, progressionStep, hiddenIndex, lineLength);

  const answer = String(startNumber + progressionStep * hiddenIndex);
  const question = progression.join(' ');

  return [question, answer];
};

const brainProgression = () => {
  gameBody(task, getQuestionAndAnswer);
};

export default brainProgression;

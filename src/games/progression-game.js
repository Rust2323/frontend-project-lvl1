import gameBody from '../index.js';

import { getRandomNumber } from '../utils.js';

const task = 'What number is missing in the progression?';

const createProgression = (firstElement, progressionDiff, hiddenElemIndex, progressionLength) => {
  const progression = [];
  let maxLength = progressionLength;
  if (hiddenElemIndex > progressionLength) {
    maxLength = hiddenElemIndex;
  }
  for (let j = 0; j <= maxLength; j += 1) {
    if (j !== hiddenElemIndex) {
      progression.push(firstElement + progressionDiff * j);
    } else {
      progression.push('..');
    }
  }

  return progression;
};

const getQuestionAndAnswer = () => {
  const firstElement = getRandomNumber(1, 100);
  const progressionDiff = getRandomNumber(1, 20);
  const hiddenElemIndex = getRandomNumber(1, 10);
  const lineLength = getRandomNumber(5, 9);

  const progression = createProgression(firstElement, progressionDiff, hiddenElemIndex, lineLength);

  const answer = String(firstElement + progressionDiff * hiddenElemIndex);
  const question = progression.join(' ');

  return [question, answer];
};

const brainProgression = () => {
  gameBody(task, getQuestionAndAnswer);
};

export default brainProgression;

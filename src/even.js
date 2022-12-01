import {
  startGame, endGame, isAnswerRight, randomizer,
} from './index.js';

const user = startGame();
const brainEven = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let numberOfRightAnswers = 0;
  let rightAnswer = '';
  for (let i = 0; i < 3; i += 1) {
    const arr = randomizer();
    const answer = arr[0];
    const number = arr[1];

    if (number % 2 === 0) {
      rightAnswer = 'yes';
    } else rightAnswer = 'no';
    numberOfRightAnswers = isAnswerRight(answer, rightAnswer, numberOfRightAnswers, user);
  }

  endGame(numberOfRightAnswers, user);
};
export default brainEven;

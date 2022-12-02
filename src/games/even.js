import {
  startGame, endGame, isAnswerRight, randomizer, gameQuestion,
} from '../index.js';

const brainEven = () => {
  const user = startGame();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let numberOfRightAnswers = 0;
  let rightAnswer = '';
  for (let i = 0; i < 3; i += 1) {
    const arr = randomizer();
    const number = arr[0];
    const answer = gameQuestion(number);
    if (number % 2 === 0) {
      rightAnswer = 'yes';
    } else rightAnswer = 'no';
    numberOfRightAnswers = isAnswerRight(answer, rightAnswer, numberOfRightAnswers, user);
  }

  endGame(numberOfRightAnswers, user);
};

export default brainEven;

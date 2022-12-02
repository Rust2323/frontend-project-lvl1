import {
  startGame, endGame, isAnswerRight, randomizer, gameQuestion,
} from '../index.js';

const brainPrime = () => {
  const user = startGame();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let numberOfRightAnswers = 0;
  let rightAnswer = '';
  for (let i = 0; i < 3; i += 1) {
    const arr = randomizer();
    const number = arr[0];
    const answer = gameQuestion(number);
    if (number % 2 === 0 || number % 3 === 0 || number % 5 === 0 || number % 7 === 0) {
      rightAnswer = 'no';
    } else rightAnswer = 'yes';
    numberOfRightAnswers = isAnswerRight(answer, rightAnswer, numberOfRightAnswers, user);
  }

  endGame(numberOfRightAnswers, user);
};

export default brainPrime;

import {
  startGame, endGame, isAnswerRight, randomizer, gameQuestion,
} from './index.js';
import gcdGame from './games/gcd-game.js';

const brainGcd = () => {
  const user = startGame();
  console.log('Find the greatest common divisor of given numbers.');
  let numberOfRightAnswers = 0;
  let rightAnswer = '';
  for (let i = 0; i < 3; i += 1) {
    const arr = randomizer();
    const [number1, number2] = arr;
    const question = `${number1} ${number2}`;
    const answer = gameQuestion(question);
    rightAnswer = gcdGame(number1, number2);

    numberOfRightAnswers = isAnswerRight(answer, rightAnswer, numberOfRightAnswers, user);
  }

  endGame(numberOfRightAnswers, user);
};

export default brainGcd;

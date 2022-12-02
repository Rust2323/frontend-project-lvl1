import {
  startGame, endGame, isAnswerRight, randomizer, gameQuestion,
} from './index.js';
import calcGame from './games/calc-game.js';

const brainCalc = () => {
  const user = startGame();
  console.log('What is the result of the expression?');
  let numberOfRightAnswers = 0;
  let rightAnswer = '';
  for (let i = 0; i < 3; i += 1) {
    const arr = randomizer();
    const [number1, number2, arifmetics] = arr;
    rightAnswer = calcGame(number1, number2, arifmetics);
    const question = `${number1} ${arifmetics} ${number2}`;
    const answer = gameQuestion(question);

    numberOfRightAnswers = isAnswerRight(answer, rightAnswer, numberOfRightAnswers, user);
  }

  endGame(numberOfRightAnswers, user);
};

export default brainCalc;

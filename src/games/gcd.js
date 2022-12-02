import {
  startGame, endGame, isAnswerRight, randomizer, gameQuestion,
} from '../index.js';

const brainGcd = () => {
  const user = startGame();
  console.log('Find the greatest common divisor of given numbers.');
  let numberOfRightAnswers = 0;
  let rightAnswer = '';
  for (let i = 0; i < 3; i += 1) {
    const arr = randomizer();
    let [number1, number2] = arr;
    const question = `${number1} ${number2}`;
    const answer = gameQuestion(question);
    while (number1 !== number2) {
      if (number1 > number2) {
        number1 -= number2;
      } else {
        number2 -= number1;
      }
    }
    rightAnswer = number1;
    rightAnswer = String(rightAnswer);
    numberOfRightAnswers = isAnswerRight(answer, rightAnswer, numberOfRightAnswers, user);
  }

  endGame(numberOfRightAnswers, user);
};

export default brainGcd;

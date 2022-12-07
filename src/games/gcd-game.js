import {
  gameBody, randomizer,
} from '../index.js';

const gameQuestion = 'Find the greatest common divisor of given numbers.';

const expressionAndAnswer = () => {
  const [number1, number2] = randomizer();
  const expression = `${number1} ${number2}`;
  let numberOne = number1;
  let numberTwo = number2;
  while (numberOne !== numberTwo) {
    if (numberOne > numberTwo) {
      numberOne -= numberTwo;
    } else {
      numberTwo -= numberOne;
    }
  }
  let rightAnswer = numberOne;
  rightAnswer = String(rightAnswer);
  return [expression, rightAnswer];
};

const brainGcd = () => {
  gameBody(gameQuestion, expressionAndAnswer);
};

export default brainGcd;

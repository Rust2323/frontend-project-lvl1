import gameBody from '../index.js';

import { randomizer } from '../utils.js';

const gameTask = 'Find the greatest common divisor of given numbers.';

const getExpressionAndAnswer = () => {
  const firstNumber = randomizer();
  const secondNumber = randomizer();
  const expression = `${firstNumber} ${secondNumber}`;

  const whatGcd = (number1, number2) => {
    let numberOne = number1;
    let numberTwo = number2;
    while (numberOne !== numberTwo) {
      if (numberOne > numberTwo) {
        numberOne -= numberTwo;
      } else {
        numberTwo -= numberOne;
      }
    }
    return numberOne;
  };

  const answer = String(whatGcd(firstNumber, secondNumber));
  return [expression, answer];
};

const brainGcd = () => {
  gameBody(gameTask, getExpressionAndAnswer);
};

export default brainGcd;

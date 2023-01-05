import {gameBody} from '../index.js';

import {randomizer} from '../utils.js';

const gameTask = 'Find the greatest common divisor of given numbers.';

const getExpressionAndAnswer = () => {
  const number1 = randomizer();
  const number2 = randomizer();
  const expression = `${number1} ${number2}`;

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
  }
 
  let answer = String(whatGcd(number1, number2));
  return [expression, answer];
};

const brainGcd = () => {
  gameBody(gameTask, getExpressionAndAnswer);
};

export default brainGcd;

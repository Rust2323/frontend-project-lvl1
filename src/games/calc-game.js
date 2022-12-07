import {
  gameBody, randomizer,
} from '../index.js';

const gameQuestion = 'What is the result of the expression?';

const expressionAndAnswer = () => {
  let rightAnswer = 0;
  const [number1, number2, arifmetics] = randomizer();
  const expression = `${number1} ${arifmetics} ${number2}`;
  switch (arifmetics) {
    case '-':
      rightAnswer = number1 - number2;
      break;
    case '+':
      rightAnswer = number1 + number2;
      break;
    case '*':
      rightAnswer = number1 * number2;
      break;
    default:
      rightAnswer = 0;
  }
  rightAnswer = String(rightAnswer);

  return [expression, rightAnswer];
};

const brainCalc = () => {
  gameBody(gameQuestion, expressionAndAnswer);
};
export default brainCalc;

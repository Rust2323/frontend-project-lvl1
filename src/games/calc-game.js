const calcGame = (number1, number2, arifmetics) => {
  let rightAnswer = 0;
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
  return rightAnswer;
};
export default calcGame;

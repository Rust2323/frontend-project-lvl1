const gcdGame = (number1, number2) => {
  let rightAnswer = 0;
  let numberOne = number1;
  let numberTwo = number2;
  while (numberOne !== numberTwo) {
    if (numberOne > numberTwo) {
      numberOne -= numberTwo;
    } else {
      numberTwo -= numberOne;
    }
  }
  rightAnswer = numberOne;
  rightAnswer = String(rightAnswer);
  return rightAnswer;
};
export default gcdGame;

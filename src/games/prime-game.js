const primeGame = (number) => {
  let rightAnswer = '';
  if (number % 2 === 0 || number % 3 === 0 || number % 5 === 0 || number % 7 === 0) {
    rightAnswer = 'no';
  } else rightAnswer = 'yes';
  return rightAnswer;
};
export default primeGame;

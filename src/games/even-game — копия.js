const evenGame = (number) => {
  let rightAnswer = '';
  if (number % 2 === 0) {
    rightAnswer = 'yes';
  } else rightAnswer = 'no';
  return rightAnswer;
};
export default evenGame;

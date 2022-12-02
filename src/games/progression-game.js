const progressionGame = (number1, number2, randomstep) => {
  const progression = [];

  let nextnumber = number1;
  for (let j = 0; j < 5; j += 1) {
    if (j === randomstep) {
      progression.push('..');
      nextnumber += number2;
    }
    progression.push(nextnumber);
    nextnumber += number2;
  }
  let rightAnswer = progression[randomstep - 1] + number2;
  rightAnswer = String(rightAnswer);
  const result = [];
  result.push(rightAnswer, progression);

  return result;
};
export default progressionGame;

import readlineSync from 'readline-sync';

const gameBody = (gameQuestion, expressionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  const user = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${user}!`);
  console.log (gameQuestion);
  let numberOfRightAnswers = 0;
  const numberOfRounds = 3;
  for (let i = 0; i < numberOfRounds; i += 1) {
    const [gameExpression, rightAnswer] = expressionAndAnswer();
    const userAnswer = readlineSync.question(`Question: ${gameExpression}\nYour answer: `);
    if (userAnswer === rightAnswer) {
      console.log('Correct!');
      numberOfRightAnswers += 1;  
    }
    else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLets try again, ${user}!`);
    }
  if (numberOfRightAnswers === 3) {
    return console.log(`Congratulations, ${user}!`);
  }
}

};
const randomizer = () => {
  const numberOne = Math.floor(1 + (Math.random() * 100));
  const numberTwo = Math.floor(1 + (Math.random() * 15));
  const numberForArifmeticProgression = Math.floor(1 + (Math.random() * 4));
  const arifmetics = ['+', '-', '*'];
  const countingArifmetics = Math.floor(Math.random() * 3);
  const arr = [];
  arr.push(numberOne, numberTwo, arifmetics[countingArifmetics], numberForArifmeticProgression);

  return arr;
};

export {
  gameBody, randomizer,
};
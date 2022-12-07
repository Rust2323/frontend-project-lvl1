import readlineSync from 'readline-sync';

const gameBody = (gameQuestion, expressionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  const user = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${user}!`);
  console.log(gameQuestion);
  let numberOfRightAnswers = 0;
  const numberOfRounds = 3;
  for (let i = 0; i < numberOfRounds; i += 1) {
    const [gameExpression, rightAnswer] = expressionAndAnswer();
    const userAnswer = readlineSync.question(`Question: ${gameExpression}\nYour answer: `);
    if (userAnswer === rightAnswer) {
      console.log('Correct!');
      numberOfRightAnswers += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLets try again, ${user}!`);
      i = numberOfRounds;
    }
    if (numberOfRightAnswers === 3) {
      console.log(`Congratulations, ${user}!`);
    }
  }
};
const randomizer = () => {
  const numberOne = Math.floor(1 + (Math.random() * 100));
  const numberTwo = Math.floor(1 + (Math.random() * 15));
  const numberOfLine = Math.floor(5 + (Math.random() * 5));
  const numberForProgression = Math.floor(1 + (Math.random() * 9));
  const arifmetics = ['+', '-', '*'];
  const countArifmetics = Math.floor(Math.random() * 3);
  const arr = [];
  arr.push(numberOne, numberTwo, arifmetics[countArifmetics], numberForProgression, numberOfLine);

  return arr;
};

export {
  gameBody, randomizer,
};

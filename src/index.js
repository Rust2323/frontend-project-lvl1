import readlineSync from 'readline-sync';

const gameBody = (gameTask, getExpressionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  const user = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${user}!\n${gameTask}`);
  let numberOfRightAnswers = 0;
  const numberOfRounds = 3;
  for (let i = 0; i < numberOfRounds; i += 1) {
    const [gameExpression, rightAnswer] = getExpressionAndAnswer();
    const userAnswer = readlineSync.question(`Question: ${gameExpression}\nYour answer: `);
    if (userAnswer === rightAnswer) {
      console.log('Correct!');
      numberOfRightAnswers += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${user}!`);
      i = numberOfRounds;
    }
    if (numberOfRightAnswers === 3) {
      console.log(`Congratulations, ${user}!`);
    }
  }
};


export {gameBody};

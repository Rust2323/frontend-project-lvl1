import readlineSync from 'readline-sync';

const gameBody = (task, getQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  const user = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${user}!\n${task}`);
  const numberOfRounds = 3;
  for (let i = 0; i < numberOfRounds; i += 1) {
    const [question, rightAnswer] = getQuestionAndAnswer();
    const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);
    if (userAnswer !== rightAnswer) {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${user}!`);
    }
    console.log('Correct!');
  }
  return console.log(`Congratulations, ${user}!`);
};

export default gameBody;

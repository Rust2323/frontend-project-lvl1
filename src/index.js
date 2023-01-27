import readlineSync from 'readline-sync';

const gameBody = (task, getQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  const user = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${user}!\n${task}`);
  let numberOfRightAnswers = 0;
  const numberOfRounds = 3;
  while (numberOfRightAnswers < numberOfRounds) {
    const [question, rightAnswer] = getQuestionAndAnswer();
    const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);
    if (userAnswer !== rightAnswer) {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${user}!`);
    }
    console.log('Correct!');
    numberOfRightAnswers += 1;
  }
  return console.log(`Congratulations, ${user}!`);
};

export default gameBody;

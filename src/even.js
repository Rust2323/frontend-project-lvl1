import readlineSync from 'readline-sync';

const brainEven = () => {
  const user = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${user}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let rightAnswers = 0;
  const finish = `Congratulations, ${user}!`;
  do {
    const number = Math.floor(Math.random() * 100);
    const answer = readlineSync.question(`Question: ${number}\nYour answer: `);

    if (number % 2 === 0 && rightAnswers <= 3) {
      if (answer === 'yes') {
        console.log('Correct!');
        rightAnswers += 1;
      } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.\nLets try again, ${user}`);
        rightAnswers = 0;
      }
    } else if (number % 2 !== 0) {
      if (answer === 'no') {
        console.log('Correct!');
        rightAnswers += 1;
      } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.\nLets try again, ${user}`);
        rightAnswers = 0;
      }
    }
  } while (rightAnswers < 3);
  return console.log(finish);
};
export default brainEven;

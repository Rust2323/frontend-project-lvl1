import readlineSync from 'readline-sync';

const startGame = (userName) => {
  let user = userName;
  console.log('Welcome to the Brain Games!');
  user = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${user}!`);
  return user;
};

const endGame = (rightAnswersFromtheGame, userName) => {
  if (rightAnswersFromtheGame === 3) {
    return console.log(`Congratulations, ${userName}! You are genius!`);
  }
  return console.log(`You have ${rightAnswersFromtheGame} correct answers. Game over. If you want to win, you need 3. Try again, ${userName}!`);
};

const isAnswerRight = (userAnswer, rightAnswer, countOfRightAnswers, userName) => {
  let result = countOfRightAnswers;

  if (userAnswer === rightAnswer) {
    console.log('Correct!');
    result += 1;
    console.log(`\nYour score: ${result}\n`);
    return result;
  }

  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLets try again, ${userName}`);

  return countOfRightAnswers;
};

const randomizer = (question) => {
  const numberOne = Math.floor(1 + (Math.random() * 100));
  let answer = question;
  answer = readlineSync.question(`Question: ${numberOne}\nYour answer: `);
  const arr = [];
  arr.push(answer, numberOne);

  return arr;
};

export {
  startGame, endGame, isAnswerRight, randomizer,
};

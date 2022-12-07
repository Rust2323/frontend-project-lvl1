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
    return console.log(`Congratulations, ${userName}!`);
  }
 // if (rightAnswersFromtheGame === 1) {
 //   return console.log(`\nGAME OVER! :(\nYou have only ${rightAnswersFromtheGame} correct answer. If you want to win, you need 3. Try again, ${userName}!`);
  }
 // return console.log(`\nGAME OVER! :(\nYou have ${rightAnswersFromtheGame} correct answers. If you want to win, you need 3. Try again, ${userName}!`);
//};

const isAnswerRight = (userAnswer, rightAnswer, countOfRightAnswers, userName) => {
  let result = countOfRightAnswers;

  if (userAnswer === rightAnswer) {
    console.log('Correct!');
    result += 1;
    //console.log(`Your score: ${result}\n`);
    return result;
  }

  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.Lets try again, ${userName}`);

  return countOfRightAnswers;
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

const gameQuestion = (expression) => {
  const answer = readlineSync.question(`Question: ${expression}\nYour answer: `);
  return answer;
};

export {
  startGame, endGame, isAnswerRight, randomizer, gameQuestion,
};

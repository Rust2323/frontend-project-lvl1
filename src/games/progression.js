import {
  startGame, endGame, isAnswerRight, randomizer, gameQuestion,
} from '../index.js';

const brainProgression = () => {
  const user = startGame();
  console.log('What number is missing in the progression?');
  let numberOfRightAnswers = 0;
  let rightAnswer = '';
  for (let i = 0; i < 3; i += 1) {
    const arr = randomizer();
    const [number1, number2, , numberOfSteps] = arr;
    const progression = [];
    let nextnumber = number1;
    for (let j = 0; j < 5; j += 1) {
      if (j === numberOfSteps) {
        progression.push('..');
        nextnumber += number2;
      }
      progression.push(nextnumber);
      nextnumber += number2;
    }
    rightAnswer = progression[numberOfSteps - 1] + number2;
    const question = `${progression}`;
    const answer = gameQuestion(question);

    rightAnswer = String(rightAnswer);
    numberOfRightAnswers = isAnswerRight(answer, rightAnswer, numberOfRightAnswers, user);
  }

  endGame(numberOfRightAnswers, user);
};

export default brainProgression;

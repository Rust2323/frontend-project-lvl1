import {
  startGame, endGame, isAnswerRight, randomizer, gameQuestion,
} from './index.js';
import progressionGame from './games/progression-game.js';

const brainProgression = () => {
  const user = startGame();
  console.log('What number is missing in the progression?');
  let numberOfRightAnswers = 0;

  for (let i = 0; i < 3; i += 1) {
    const arr = randomizer();
    const [number1, number2, , randomDots] = arr;
    const [rightAnswer, progression] = progressionGame(number1, number2, randomDots);
    const question = `${progression}`;
    const answer = gameQuestion(question);
    numberOfRightAnswers = isAnswerRight(answer, rightAnswer, numberOfRightAnswers, user);
  }

  endGame(numberOfRightAnswers, user);
};

export default brainProgression;

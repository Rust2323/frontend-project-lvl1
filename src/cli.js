import readlineSync from 'readline-sync';

const askUser = (userName) => {
  let user = userName;
  user = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${user}!`);
};

export default askUser;

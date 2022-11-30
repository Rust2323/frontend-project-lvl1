import readlineSync from 'readline-sync';
const askUser = (userName) => {
    userName = readlineSync.question('May I have your name? ');
    console.log('Hello, ' + userName + '!');
};
export default askUser;


/* eslint-disable import/prefer-default-export */

export const getRandomNumber = (start = 1, end = 100) => {
  const rightEnd = end - start;
  return Math.floor(start + (Math.random() * (rightEnd)));
};

export const getAnswer = (booleanAnswer) => (booleanAnswer ? 'yes' : 'no');

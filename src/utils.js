const randomizer = (start = 1, end = 100) => Math.floor(start + (Math.random() * (end - start)));

const arifmetics = () => {
  const arifmetic = ['+', '-', '*'];
  const countArifmetic = Math.floor(Math.random() * arifmetic.length);
  return arifmetic[countArifmetic];
};

export { randomizer, arifmetics };

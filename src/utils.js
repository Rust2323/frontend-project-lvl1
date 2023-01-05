  const randomizer = (start = 1, end = 100) => {
    return Math.floor(start + (Math.random() * (end - start)));}

  const arifmetics = () => {
    const arifmetics = ['+', '-', '*'];
    const countArifmetics = Math.floor(Math.random() * arifmetics.length);
    return arifmetics[countArifmetics];
  }

  export {randomizer, arifmetics};
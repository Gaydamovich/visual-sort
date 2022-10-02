const getRandomIntFromInterval = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1) + min);

export const createArray = (length: number): number[] =>
  Array(length).fill(null).map(() => getRandomIntFromInterval(20, 500));

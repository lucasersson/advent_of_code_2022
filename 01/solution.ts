import { readFile } from "../utils";

const input = readFile("./input.txt").split(/\n\s+/);
const array = input
  .map((x) =>
    x
      .trim()
      .split(/\r?\n|\r/)
      .reduce((a, b) => Number(a) + Number(b), 0)
  )
  .sort((a, b) => a - b);

// part one
const partOne = array.at(-1);
console.log(partOne);

// part two
const partTwo = array.slice(-3).reduce((a, b) => Number(a) + Number(b), 0);
console.log(partTwo);

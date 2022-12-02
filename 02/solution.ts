import { readFile } from "../utils";

const input = readFile("./input.txt").split(/\r\n/);

// part one
const part1 = input
  .map((x) => x.split(" "))
  .map(([a, b]) => {
    return [
      a === "A" ? 1 : a === "B" ? 2 : a === "C" ? 3 : null,
      b === "X" ? 1 : b === "Y" ? 2 : b === "Z" ? 3 : null,
    ];
  })
  .map(([a, b]) => {
    return a !== null && b !== null
      ? a - b == 2
        ? 6 + b
        : b - a == 2
        ? b
        : a > b
        ? 0 + b
        : a === b
        ? 3 + b
        : a < b
        ? 6 + b
        : null
      : null;
  })
  .reduce((a, b) => Number(a) + Number(b), 0);

// console.log(part1);

// part two
const part2 = input
  .map((x) => x.split(" "))
  .map(([a, b]) => {
    return b === "X"
      ? a === "A"
        ? 3
        : a === "B"
        ? 1
        : a === "C"
        ? 2
        : null
      : b === "Y"
      ? a === "A"
        ? 3 + 1
        : a === "B"
        ? 3 + 2
        : a === "C"
        ? 3 + 3
        : null
      : b === "Z"
      ? a === "A"
        ? 6 + 2
        : a === "B"
        ? 6 + 3
        : a === "C"
        ? 6 + 1
        : null
      : null;
  })
  .reduce((a, b) => Number(a) + Number(b), 0);

console.log(part2);

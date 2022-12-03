import { readFile } from "../utils";

const input = readFile("./input.txt").split(/\r\n/);
const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

// part one
const part1 = input
  .map((x) => [x.slice(0, [...x].length / 2), x.slice([...x].length / 2)])
  .map((x) =>
    x[0]
      .split("")
      .filter((i) => x[1].includes(i))
      .filter((a, b, i) => i.indexOf(a) === b)
  )
  .map((x) =>
    x
      .map((a) => alphabet.indexOf(a) + 1)
      .reduce((a, b) => Number(a) + Number(b), 0)
  )
  .reduce((a, b) => Number(a) + Number(b), 0);

console.log(part1);

// part 2
const part2 = input
  .map((x, i, a) => (i % 3 === 0 ? a.slice(i, i + 3) : []))
  .filter((x) => x.length > 0)
  .map((x) =>
    x[0]
      .split("")
      .filter((i) => x[1].includes(i) && x[2].includes(i))
      .filter((a, b, i) => i.indexOf(a) === b)
  )
  .map((x) =>
    x
      .map((a) => alphabet.indexOf(a) + 1)
      .reduce((a, b) => Number(a) + Number(b), 0)
  )
  .reduce((a, b) => Number(a) + Number(b), 0);

console.log(part2);

import { readFile } from "../utils";

const input = readFile("./input.txt");

// part one
const part1 = findDistinctChars(input, 4);

console.log(part1);

// part two
const part2 = findDistinctChars(input, 14);

console.log(part2);

function findDistinctChars(string: string, length: number) {
  return string
    .split("")
    .filter((_, i) => i >= 4)
    .map((_, i, a) => [...Array(length)].map((_, j) => a[j + i]))
    .filter((x) => new Set(x).size === x.length)
    .map((e) => input.indexOf(e.toString().replace(/,/g, "")) + length)[0];
}

import { readFile } from "../utils";

const input = readFile("./input.txt").split(/\r\n/);

const part1 = input
  .map((x) => x.split(","))
  .map((x) => x.map((e) => e.split("-")))
  .filter(
    (i) =>
      (Number(i[0][0]) >= Number(i[1][0]) &&
        Number(i[0][1]) <= Number(i[1][1])) ||
      (Number(i[1][0]) >= Number(i[0][0]) && Number(i[1][1]) <= Number(i[0][1]))
  ).length;

console.log(part1);

const part2 = input
  .map((x) => x.split(","))
  .map((x) => x.map((e) => e.split("-")))
  .filter(
    (i) =>
      (+i[0][1] >= +i[1][0] && +i[1][1] >= +i[0][1]) ||
      (+i[1][1] >= +i[0][0] && +i[0][1] >= +i[1][1])
  ).length;

console.log(part2);

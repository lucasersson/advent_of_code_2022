import { readFile } from "../utils";

const input = readFile("./input.txt").split(/\r\n/);

const stacks = input
  .map((x) => x.split(/\r\n/))
  .slice(0, 8)
  .map((x) => x[0].split(""))
  .map((x) => [x[1], x[5], x[9], x[13], x[17], x[21], x[25], x[29], x[33]])
  .map((_, i, a) => a.map((j) => j[i]).filter((x) => !x.match(/\s/)));

console.log(stacks);

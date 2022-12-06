import { readFile } from "../utils";

const input = readFile("./input.txt").split(/\r\n/);

const stacks = input
  .map((x) => x.split(/\r\n/))
  .slice(0, 9)
  .map((x) => x[0].split(""))
  .map((x) => [x[1], x[5], x[9], x[13], x[17], x[21], x[25], x[29], x[33]])
  .map((_, i, a) => a.map((j) => j[i]).filter((x) => !x.match(/\s/)));

const instructions = input
  .map((x) => x.split(/\r\n/))
  .slice(10)
  .map((x) => x.map((e) => e.match(/[0-9]+/g)))
  .map((e) => e[0]);

// part one
// deep copy of stacks
const crateMover9000Stacks = JSON.parse(JSON.stringify(stacks));
const part1 = crateMover(crateMover9000Stacks);

console.log(part1);

// part two
// deep copy of stacks
const crateMover9001Stacks = JSON.parse(JSON.stringify(stacks));
const part2 = crateMover(crateMover9001Stacks, true);

console.log(part2);

function crateMover(stacks: string[][], part2?: boolean): string {
  return instructions
    .map((x) => {
      const from = stacks[Number(x?.[1]) - 1];
      const amount = from.splice(0, Number(x?.[0]));
      const to = stacks[Number(x?.[2]) - 1];

      part2 ? to.splice(0, 0, ...amount) : to.splice(0, 0, ...amount.reverse());

      return stacks;
    })
    .map((x) => x.map((a) => a[0]))[0]
    .flat(2)
    .toString()
    .replace(/,/g, "");
}

import { readFile } from "../utils";

const input = readFile("./input.txt").split(/\r\n/);
const size: { [key: string]: number } = {};
const dirs: string[] = [];

// parsing
input.map((x) => {
  if (x.startsWith("$ cd ")) {
    x.includes("..") ? dirs.pop() : dirs.push(x.split("$ cd ")[1]);
  } else if (/^\d/.test(x)) {
    const copy = [...dirs];
    while (copy.length) {
      const k = copy.join("_");
      size[k] = (size[k] || 0) + +x.split(" ")[0];
      copy.pop();
    }
  }
});

// part one
const part1 = Object.values(size)
  .filter((x) => x <= 100000)
  .reduce((a, b) => +a + +b, 0);

console.log(part1);

// part two
const part2 = Int32Array.from(Object.values(size))
  .filter((v) => v >= 30000000 - (70000000 - size["/"]))
  .sort()[0];

console.log(part2);

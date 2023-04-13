const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');

const inputTestCase = input.map((item) => Number(item));

const list = [];

inputTestCase.forEach((number) => {
  const result = number % 42;

  list.push(result);
});

const unique = [...new Set(list)];

console.log(unique.length);

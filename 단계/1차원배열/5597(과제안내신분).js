const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let input = fs.readFileSync(filePath).toString().split('\n');

const inputTestCase = input.map((item) => Number(item)).sort((a, b) => a - b);

const studentCount = 30;

let answer = '';

for (let i = 1; i <= studentCount; i += 1) {
  if (!inputTestCase.includes(i)) answer += i + '\n';
}

console.log(answer);

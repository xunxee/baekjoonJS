const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let input = fs.readFileSync(filePath).toString().split('\n');

let inputTestCase = [];

for (let i = 0; i < input.length - 1; i += 1) {
  const array = input[i].split(' ').map((item) => Number(item));

  inputTestCase.push(array);
}

function solution(inputTestCase) {
  let answer = '';

  inputTestCase.forEach(([ a, b ]) => {
    if (a === 0 && b === 0) return;

    answer += (a + b) + '\n';
  });

  console.log(answer);
}

solution(inputTestCase);

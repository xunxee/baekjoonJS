const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let input = fs.readFileSync(filePath).toString().split('\n');

const inputTestCase = [];

for (let i = 1; i <= input[0]; i += 1) {
  const array = input[i].split(' ').map((item) => Number(item));

  inputTestCase.push(array);
}

function solution(inputTestCase) {
  let answer = '';

  inputTestCase.forEach(([ a, b ]) => {
    answer += a + b + '\n';
  });

  console.log(answer);
}

solution(inputTestCase);

const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let input = fs.readFileSync(filePath).toString().split('\n');

const T = +input[0];
const inputTestCase = [];

for (let i = 1; i <= T; i += 1) {
  const array = input[i].split(' ').map((item) => Number(item));

  inputTestCase.push(array);
}

function solution(inputTestCase) {
  let answer = '';

  inputTestCase.forEach(([ a, b ], index) => {
    answer += `Case #${index + 1}: ${a + b}` + '\n';
  });

  console.log(answer);
}

solution(inputTestCase);

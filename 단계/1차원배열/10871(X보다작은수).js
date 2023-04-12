const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let input = fs.readFileSync(filePath).toString().split('\n');

const X = input[0].split(' ')[1];

const inputTestCase = input[1].split(' ').map((item) => Number(item));

function solution(X, inputTestCase) {
  let answer = [];

  inputTestCase.forEach((item) => {
    if (item < X) answer.push(item);
  });

  console.log(answer.join(' '));
}

solution(X, inputTestCase);

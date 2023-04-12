const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let input = fs.readFileSync(filePath).toString().split('\n');

const inputTestCase = input.map((item) => Number(item));

function solution(inputTestCase) {
  let answer = '';

  const list = [...inputTestCase].sort((a, b) => a - b);

  const maxNumber = Math.max(...list);

  answer += maxNumber + '\n';

  answer += inputTestCase.indexOf(maxNumber) + 1;

  console.log(answer);
}

solution(inputTestCase);

const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let input = fs.readFileSync(filePath).toString().split('\n');

const bite = +input[0];

function solution(bite) {
  const number = parseInt(bite / 4);

  const answer = 'long '.repeat(number);

  console.log(`${answer}int`);
}

solution(bite);

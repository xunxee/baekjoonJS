const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let input = fs.readFileSync(filePath).toString().split('\n');

const N = +input[0];

function solution(N) {
  let answer = '';

  for (let i = 0; i < N; i += 1) {
    let star = '';

    for (let j = i + 1; j < N; j += 1) {
      star += ' ';
    }

    for (let k = 0; k < i + 1; k += 1) {
      star += '*';
    }

    answer += star + '\n';
  }

  console.log(answer);
}

solution(N);

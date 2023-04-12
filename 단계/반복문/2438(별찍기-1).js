const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let input = fs.readFileSync(filePath).toString().split('\n');

const N = +input[0];

function solution(N) {
  let star = '';
  let answer = '';

  for (let i = 1; i <= N; i += 1) {
    star += '*';

    answer += star + '\n';
  }

  console.log(answer);
}

solution(N);

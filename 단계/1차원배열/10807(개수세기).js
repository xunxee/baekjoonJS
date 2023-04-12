const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let input = fs.readFileSync(filePath).toString().split('\n');

const list = input[1].split(' ').map((item) => Number(item));
const v = +input[2];

function solution(list, v) {
  let count = 0;

  list.forEach((item) => {
    if (item === v) count += 1;
  });

  console.log(count);
}

solution(list, v);

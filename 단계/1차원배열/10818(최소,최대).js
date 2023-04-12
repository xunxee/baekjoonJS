const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let input = fs.readFileSync(filePath).toString().split('\n');

const list = input[1].split(' ').map((item) => Number(item));

function solution(list) {
  list.sort((a, b) => a - b);

  console.log(`${list[0]} ${list[list.length - 1]}`);
}

solution(list)

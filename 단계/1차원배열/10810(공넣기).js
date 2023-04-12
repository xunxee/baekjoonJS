const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let input = fs.readFileSync(filePath).toString().split('\n');

const [N, M] = input[0].split(' ').map((item) => Number(item)); // 5 4

const basket = new Array(N).fill(0); // [ 0, 0, 0, 0, 0 ]

for (let i = 1; i <= M; i += 1) {
  const [ a, b, c ] = input[i].split(' ').map((item) => Number(item));

  for (let j = a; j <= b; j += 1) {
    basket[j - 1] = c;
  }
}

console.log(basket.join(' '));

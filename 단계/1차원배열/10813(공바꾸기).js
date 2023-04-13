const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let input = fs.readFileSync(filePath).toString().split('\n');

const [N, M] = input[0].split(' ').map((item) => Number(item)); // 5 4

const inputTestCase = []; // [ [ 1, 2 ], [ 3, 4 ], [ 1, 4 ], [ 2, 2 ] ]

for (let i = 1; i <= M; i += 1) {
  inputTestCase.push(input[i].split(' ').map((item) => Number(item)));
}

const basket = new Array(N).fill(0); // [ 1, 2, 3, 4, 5 ]

for (let i = 0; i < N; i += 1) {
  basket[i] = i + 1;
}

inputTestCase.forEach(([ a, b ]) => {
  const A = basket[a - 1];
  const B = basket[b - 1];

  basket[a - 1] = B;
  basket[b - 1] = A;
});

console.log(basket.join(' '));

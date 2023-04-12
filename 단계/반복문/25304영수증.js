const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let input = fs.readFileSync(filePath).toString().split('\n');

const totalPrice = +input[0];
const total = +input[1];

const inputTestCase = {
  N: total,
};
const list = [];

for (let i = 2; i < input.length - 1; i += 1) {
  const array = input[i].split(' ').map((item) => Number(item));

  list.push(array);
}

inputTestCase.array = list;

function solution(totalPrice, inputTestCase) {
  const price = inputTestCase.array.reduce((accumulation, [ item, number ]) => {
    return (item * number) + accumulation;25
  }, 0);

  if (price === totalPrice) {
    console.log('Yes');

    return;
  }

  console.log('No');
}

solution(totalPrice, inputTestCase);

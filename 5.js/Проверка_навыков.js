const arr = [1, 2, 3, 4, 5, 7, 8, 9, 0];
const newArr = arr.reduce((acc, curr) => acc + curr);

console.log(newArr);

const arr2 = [12, 67, 434, 909];
const maximum = Math.max(...arr2);

console.log(maximum);

let arr3 = [1, 2, 3, 5],
  arr4 = [6, 7, 8, 9];

console.log(arr3.concat(arr4))
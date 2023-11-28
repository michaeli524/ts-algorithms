//数组合并，使用 concat 方法
const zero = 0;
const positiveNumbers = [1, 2, 3];
const negativeNumbers = [-3, -2, -1];
let numbers = negativeNumbers.concat(zero, positiveNumbers);

console.log(numbers);
console.log("这个方法会按照传入参数的顺序对传入的变量、数组、元素进行合并");

export {};

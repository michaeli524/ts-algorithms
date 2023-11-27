// let daysOfWeek = new Array();
// daysOfWeek = new Array(7);
// daysOfWeek = new Array(
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday"
// );

const { it } = require("node:test");

//更好的实现方法：
let daysOfWeek = [];

daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
console.log(daysOfWeek.length);
//访问元素和迭代数组
for (let i = 0; i < daysOfWeek.length; i++) {
  console.log(daysOfWeek[i]);
}

//求和斐波那契数列
const fibonacci = [];
fibonacci[1] = 1;
fibonacci[2] = 1;

for (let i = 3; i < 20; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

fibonacci.map((item) => {
  console.log(item);
});

let numbers = [0, 1, 2, 3, 4, 5];
numbers[numbers.length] = 10;
console.log(numbers);

numbers.push(11);
numbers.push(12);
console.log(numbers);

const isEven = (x: number) => x % 2 === 0;

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(num.every(isEven), "every 会在遇到 false 时结束");

console.log(num.some(isEven), "some 会在遇到 true 时结束");

//使用 forEach 方法迭代，和使用 for 的结果一直
console.log("使用 forEach 进行每个元素的迭代");
num.forEach((x) => console.log(x % 2 === 0));

//使用 map 和 filter 方法
let myMap = num.map(isEven);

console.log("myMap:", myMap);
console.log("返回每一个元素");

//use filter
const evenNumbers = num.filter(isEven);
console.log("the filter fun only return the true index");
console.log(evenNumbers);

//use reduce
console.log("first");
num.reduce((previous, current) => previous + current);

export {};

let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(numbers);
numbers.splice(5, 2);
console.log(numbers);
console.log("这段代码删除了从索引 5 开始的三个元素 ");
console.log(
  "splice 接受多个参数，第一个是索引位置，第二个是要删除的元素数量，后面的都是要插入数组的数，比如说在索引为 5 的位置插入 2，3，4"
);
numbers.splice(5, 0, 2, 3, 4);
console.log(numbers);
let num: number[] = [];
for (let i = -2; i < 14; i++) {
  num.push(i);
}
console.log(num);
num.splice(5, 3, 2, 3, 4);
console.log(num);

export {};

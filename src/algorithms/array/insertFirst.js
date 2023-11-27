// 在数组最前方插入一个新元素
// 腾出数组里的第一个元素，把所有的元素向右移动一位
Array.prototype.insertFirstPosition = function (value) {
  for (let i = this.length; i > 0; i--) {
    this[i] = this[i - 1];
  }
  this[0] = value;
};

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.insertFirstPosition(10);
console.log(numbers);

numbers.unshift(20);
console.log(numbers);
numbers.unshift(-2, -3);
console.log(numbers);

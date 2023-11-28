let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.pop();
// console.log(numbers);

//移除数组里的第一个元素：
for (let i = 0; i < numbers.length; i++) {
  numbers[i] = numbers[i + 1];
}
// console.log(numbers);

//逻辑上，这样只是把后面的值赋值到了第一个位置，数组元素的数量没有变化，而且还多了一个 undefined
//真正意义上实现删除元素需要：
console.log("移除前的数组：" + numbers);
Array.prototype.reIndex = function (myArray) {
  const newArray = [];
  for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] !== undefined) {
      newArray.push(myArray[i]);
    }
  }
  return newArray;
};

Array.prototype.removeFirstPosition = function () {
  //这里先按照原始的方法，把所有元素前移，移除第一个元素
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i + 1];
  }
  return this.reIndex(this);
};
console.log(numbers.removeFirstPosition());
//这里只是对 shift 方法的实现，实际项目中直接使用 shift
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
num.shift();
console.log(num);
console.log("shift 和 unshift 可以实现队列");

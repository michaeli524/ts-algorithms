//用数组的数组形式实现矩阵/多位数组
let multiArray: number[][] = [];
multiArray[0] = [];
multiArray[0][0] = 72;
multiArray[0][1] = 66;
multiArray[0][2] = 79;
multiArray[0][3] = 79;
multiArray[0][4] = 81;
multiArray[0][5] = 81;

multiArray[1] = [];
multiArray[1][0] = 81;
multiArray[1][1] = 79;
multiArray[1][2] = 75;
multiArray[1][3] = 75;
multiArray[1][4] = 73;
multiArray[1][5] = 73;

console.log(multiArray);
//迭代显示这个矩阵的值，使用方法
//简单的迭代一下，用嵌套循环就可以
function printMatrix(myMatrix: number[][]) {
  for (let i = 0; i < myMatrix.length; i++) {
    for (let j = 0; j < myMatrix[i].length; j++) {
      console.log(myMatrix[i][j]);
    }
  }
}
printMatrix(multiArray);
console.log("可以使用 console.table() 这种方式输出结果更好看：");
console.table(multiArray);

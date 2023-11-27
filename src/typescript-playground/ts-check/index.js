// @ts-check
let variable = 10;
variable = "string";
// 这里就可以看到有报错信息了，变量在定义的时候并没有像 ts 一样约束类型
console.log(variable);

function makeFunc() {
  var name = "Mozilla";
  function displayName() {
    alert(name);
  }
  return displayName;
}

//这就是闭包最常用的情形：函数返回了在它内部定义的嵌套函数。
var myFunc = makeFunc();
myFunc();

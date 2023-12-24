# 回调函数

被作为实参传入另一个函数，并在该外部函数内被调用，用来完成某些任务的函数，称为回调函数。

~~~js	
function greeting(name) {
  alert("Hello " + name);
}

function processUserInput(callback) {
  var name = prompt("Please enter your name.");
  callback(name);
}

processUserInput(greeting);
~~~

这是一个同步回调，他是立即执行的。

需要注意的是，回调函数经常被用于在一个异步操作完成后执行代码，他们被称为异步回调。一个常见的例子就是在promise末尾添加的`.then`内执行回调函数（在promise被兑现或拒绝时执行）。
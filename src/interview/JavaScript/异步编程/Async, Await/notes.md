# Async 和 Await

这是一种异步操作机制

## 定义

Async 用来声明一个异步方法，await 用来等待异步方法执行

## Async

async 函数返回一个 promise 对象

## Await

如果 await 后面是一个 promise 对象，就返回对象的结果，如果不是 promise 对象，就返回对应的值。

不管 await 后面跟的是什么，都会阻塞后面的代码，会把他加入微任务队列。

先执行 async 外面的同步代码，同步代码执行完，再回到 async 函数中，最后再执行之前阻塞的代码。

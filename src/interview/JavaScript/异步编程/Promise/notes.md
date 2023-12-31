# Promise

这是一种为简化异步编程而设计的核心语言特性。

## 定义

Promise是异步编程的一种解决方案，比传统的回调函数更加合理更加强大。

他避免了回调地狱，链式操作降低了编码难度，具有更高的可读性。

## 状态

Promise是一个对象，他表示异步操作的结果，有三种状态：

pending表示正在处理，fulfilled表示操作成功，reject表示操作失败

一旦状态改变，就不会再变。

## 用法

### 创建

Promise对象是一个构造函数，用来生成Promise实例。

他接受一个函数作为参数，这个函数有两个参数：

+ resolve：作用是将Promise对象的状态从未完成变成成功
+ reject：作用是将Promise对象的状态从未完成变成失败

### 实例方法

then：接受两个参数：成功时的回调函数，失败的回调函数，每个then都返回一个新的Promise对象，可被用于链式调用。

catch：失败时调用，用于进行错误处理，一样会返回Promise对象，可以被链式调用。

finally：无论结果如何都会执行的操作。
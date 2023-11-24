var obj: object = new Object();
obj = {};
obj = {
  name: {
    first: "Gandalf",
    last: "the Grey",
  },
  address: "middle Earth",
};
// 所有的 Stack、Set、LinkedList、Dictionary、Tree、Graph 等都是 js 对象

function Book(title, pages, isbn) {
  this.title = title;
  this.pages = pages;
  this.isbn = isbn;
}

let book = new Book("title", "pages", "isbn");

Book.prototype.printTitle = function () {
  console.log(this.title);
};
book.printTitle();

console.log(book.title);
console.log(book.isbn);
console.log(book.pages);
// 可以直接在类的定义中实现方法，但是那样会在每一个对象的事例中创建一个副本，如果
// 定义在 prototype 里面，那么就可以在每个实例间共享，但是这样定义 public 属性的方法
// 直接在类的定义内可以声明只在类内部访问的 private 函数和属性

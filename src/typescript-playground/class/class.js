class Book {
  constructor(title, pages, isbn) {
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
  }
  printIsbn() {
    console.log(this.isbn);
  }
}
let book = new Book("title", "pages", "isbn");

class ITBook extends Book {
  constructor(title, pages, isbn, tech) {
    super(title, pages, isbn);
    this.tech = tech;
  }
  printTech() {
    console.log(this.tech);
  }
}
let jsBook = new ITBook("JSbook", "100", "isbn", "javascript");
console.log(jsBook.title);
jsBook.printTech();

class Person {
  constructor(name) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
  }
}

let lotChar = new Person("first");
console.log(lotChar.name);
lotChar.name = "Gand";
console.log(lotChar.name);
lotChar._name = "pri";
console.log(lotChar.name);

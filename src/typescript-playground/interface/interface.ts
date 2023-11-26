// interface Person {
//   name: string;
//   age: number;
// }

// function printName(person: Person) {
//   console.log(person.name);
// }

// const mary = { name: "Mary", age: 20 };
// const john = { name: "John", age: 28, phone: "123-456-789" };

// printName(mary);
// printName(john);

interface Comparable<T> {
  compareTo(b: T): number;
}

// class MyObject implements Comparable<number> {
//   age: number = 0;
//   compareTo(b: number): number {
//     if (this.age === b) {
//       return 0;
//     }
//     return this.age > b ? 1 : -1;
//   }
// }

// let aObj = new MyObject();
// aObj.age = 19;
// console.log(aObj.compareTo(13));

// class myObject2 implements Comparable<object> {
//   age: number = 0;
//   compareTo(b: myObject2): number {
//     if (this.age === b.age) {
//       return 0;
//     }
//     return this.age > b.age ? 1 : -1;
//   }
// }
class MyObject implements Comparable<MyObject> {
  age: number = 0;
  compareTo(b: MyObject): number {
    if (this.age === b.age) {
      return 0;
    }
    return this.age > b.age ? 1 : -1;
  }
}

let myObject = new MyObject();
myObject.age = 25;
let myObject2 = new MyObject();
myObject2.age = 23;
console.log(myObject.compareTo(myObject2));

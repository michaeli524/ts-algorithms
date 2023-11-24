interface Person {
  name: string;
  age: number;
}

function printName(person: Person) {
  console.log(person.name);
}

const john = { name: "John", age: 18 };
const mary = { name: "Mary", age: 19, phone: "123-456-789" };
printName(john);
printName(mary);

interface Comparable {
  compareTo(b): number;
}

class myObject implements Comparable {
  age: number;
  compareTo(b: any): number {
    if (this.age === b.age) {
      return 0;
    }
    return this.age > b.age ? 1 : -1;
  }
}

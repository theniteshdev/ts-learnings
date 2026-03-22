// interface - main goals is to give shape to the object
interface User {
  username: string;
  uid: number;
  age: number;
  email: string;
  gender: "male" | "female";
}

/*
While working with interface it doesnot create extra js code
*/

interface PremiumUser {
  readonly phoneNo: number;
  email: string;
  hasLoggedIn: boolean;
}

const pre1: PremiumUser = {
  email: "pre@gmail.com",
  hasLoggedIn: false,
  phoneNo: 9658957425,
};

// pre1.phoneNo = 8574125845; // this is not allowed

//interface with function
interface AddFn {
  (a: number, b: number): number;
}

const add: AddFn = (x, y) => {
  return x + y;
};

console.log(add(5, 10)); // Output: 15

//interface with class
interface Person {
  name: string;
  age: number;
  greet(): void;
}

class Employee implements Person {
  public name: string;
  public age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`,
    );
  }
}

const emp1 = new Employee("Alice", 30);
emp1.greet(); // Output: Hello, my name is Alice and I am 30 years old.

// generics -> template for creating reusable components
/*
jab hum aisa function banate hai jisme humko pata nahi hota ki kis type ka data milega aur kis type ka data return karna hai to hum uss function ko generic bana dete hai taki hum uss function ko kisi bhi type ke data ke sath use kar sake
*/
function identity<T>(arg: T): T {
  return arg;
} // here i don't know what type of data i will get and what type of data i will return so i use generic

console.log(identity<string>("Hello")); // Output: Hello
console.log(identity<number>(42)); // Output: 42

// generic interface
interface Box<T>{
    number: T
};

const mybox:Box<string> = {
    number: "one"
};

// where used-> while getting reponses from api

interface ApiPromises<T>{
    status: number,
    data: T
};

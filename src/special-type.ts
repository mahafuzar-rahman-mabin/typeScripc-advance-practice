//* top type

let helloWorld: any = "Hello world";
helloWorld = 1233312;

helloWorld.length;

let any = true;

const something: unknown = "Hello world";
// something.length;

let something2: unknown;

const num: number = 12333;

something2 = num;
console.log(something2);

type Status = "pending" | "Success" | 123123;

let someStuts: string;

let status: Status = "Success";

someStuts = status;

//! Nullish type

interface User {
  name: string;
}

type loginUser = User | null;

const currentUser: loginUser = null;

//* Unit type

const greet = () => {
  console.log("Hello World");
};
greet();

//* Sub-type of unit type

const anotherGreet = (): undefined => {
  console.log("Hello World");
  return undefined;
};
const greetings: void = anotherGreet();
console.log(greetings);

//* Bottom type

const getError = (msg: string): never => {
  throw new Error(msg);
};

const x: null = getError("ABC");

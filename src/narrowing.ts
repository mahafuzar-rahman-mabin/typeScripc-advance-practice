//* "typeof"

let x = 123;
console.log(typeof x);

//* Type Guard

const print = (value: string | number) => {
  if (typeof value == "string") {
    return value.toUpperCase();
  }
  return value;
  //   } else if (typeof value == "number") {
  //     return value;
  //   } else {
  //     return value;
  //   }
};

//* Truthiness

type User = {
  name: string;
  address?: {
    street: string;
  };
} | null;

const user: User = {
  name: "mabin",
  address: {
    street: "Rangpur",
  },
};

const showAddress = (user: User) => {
  if (user && user?.address) {
    return user.address.street;
  }

  throw new Error("User not found");
};

//* some caveat of Type Guard

// const printAll = (x: string | string[] | null) => {
//   if (x && typeof x === "object") {
//     for (let str of x) {
//       console.log(x);
//     }
//     return;
//   } else if (typeof x === "string") {
//     console.log(x);
//     return;
//   } else {
//     console.log("");
//     return;
//   }
// };
// printAll(null);

//* Equality
const compare = (x: number | string, y: number | boolean) => {
  if (x === y) {
    console.log(x);
  }
};

const printAll = (x: string | string[] | null) => {
  if (x !== null) {
    if (typeof x === "object") {
      for (let str of x) {
        console.log(x);
      }
      return;
    } else {
      console.log(x);
    }
  }
  console.log("");
};
printAll(null);

//* "in" operator
type Bird = { fly: () => void };
type Fish = { swim: () => void };

const move = (animal: Bird | Fish) => {
  if ("fly" in animal) {
    animal.fly();
    return;
  }
  return animal.swim();
};

//* "instanceof" check

// const date = new Date();
// const err = new Error("samething went worng");

// console.log(date instanceof Date);
// console.log(err instanceof Error);

const showDate = (x: Date | string) => {
  if (x instanceof Date) {
    console.log(x.toISOString());
    return;
  }
  const date = new Date(x);
  console.log(date.toISOString());
  return;
};

const newDate = new Date("12-16-1971");
// showDate("12-4-2002");
showDate(newDate);

//* Discriminated union

interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  sideLength: number;
}

const getArea = (shape: Circle | Square) => {
  if (shape.kind === "circle") {
    console.log(shape.radius);
  } else {
    console.log(shape.sideLength);
  }
};

interface Animal {
  colour: string;
}

interface Cat extends Animal {
  bread: string;
}

const cart: Cat = {
  bread: "persian",
  colour: "Oriange",
};

//! type extands

type Phone = {
  company: string;
};

type Iphone = Phone & {
  Model: string;
};

const iPhone: Iphone = {
  Model: "iPhone 15",
  company: "Apple ",
};

// interface aggestable
interface Iemploye {
  id: number;
}

interface Iemploye {
  name: string;
}

const empolye: Iemploye = {
  id: 23,
  name: "mabin",
};

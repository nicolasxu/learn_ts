interface Person {
    name: string;
    age: number;
    location: string;
  }

  type K1 = keyof Person; // "name" | "age" | "location"
  type K2 = keyof Person[]; // "length" | "push" | "pop" | "concat" | ...
  type K3 = keyof { [x: string]: Person }; // string

/*
Pay attention to the "|" operation, it mean K1 can be any one of those

An indexed type query keyof T yields the type of
permitted property names for T. A keyof T type is
considered a subtype of string.

*/


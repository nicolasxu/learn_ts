// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-3.html


interface Dog {
  kind: "dog";
  dogProp: any;
}
interface Cat {
  kind: "cat";
  catProp: any;
}

const catOrDogArray: Dog[] | Cat[] = [];

catOrDogArray.forEach(animal => {
  //                ~~~~~~ error!
  // Parameter 'animal' implicitly has an 'any' type.
});

/////////////////////////////////////////////////

interface Dog {
  kind: "dog";
  dogProp: any;
}
interface Cat {
  kind: "cat";
  catProp: any;
}

const catOrDogArray2: Dog[] | Cat[] = [];
catOrDogArray2.forEach((animal: Dog | Cat) => {
  if (animal.kind === "dog") {
    animal.dogProp;
    // ...
  } else if (animal.kind === "cat") {
    animal.catProp;
    // ...
  }
});

//////////////////  In TypeScript 3.3, this is no longer an error. ///////////////////////////////
type Fruit = "apple" | "orange";
type Color = "red" | "orange";

type FruitEater = (fruit: Fruit) => number; // eats and ranks the fruit
type ColorConsumer = (color: Color) => string; // consumes and describes the colors

declare let f: FruitEater | ColorConsumer;

f("orange"); // It works! Returns a 'number | string'.

f("apple"); // error - Argument of type '"apple"' is not assignable to parameter of type '"orange"'.

f("red"); // error - Argument of type '"red"' is not assignable to parameter of type '"orange"'.




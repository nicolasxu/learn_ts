// First is "keyof T", the index type query operator.
// For any type T, keyof T is the union of known,
//    public property names of T. For example:

//  the second operator is T[K], the indexed access operator.

// Index types
// https://www.typescriptlang.org/docs/handbook/advanced-types.html



function pluck<T, K extends keyof T>(o: T, propertyNames: K[]): T[K][] {
    return propertyNames.map((n) => o[n]);
  }

  interface Car {
    manufacturer: string;
    model: string;
    year: number;
  }

  let taxi: Car = {
    manufacturer: "Toyota",
    model: "Camry",
    year: 2014,
  };

  // Manufacturer and model are both of type string,
// so we can pluck them both into a typed string array
let makeAndModel: string[] = pluck(taxi, ["manufacturer", "model"]);

// If we try to pluck model and year, we get an
// array of a union type: (string | number)[]
let modelYear = pluck(taxi, ["model", "year"]);


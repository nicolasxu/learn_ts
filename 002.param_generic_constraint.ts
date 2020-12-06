function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
  }

  let x = { a: 1, b: 2, c: 3, d: 4 };

  getProperty(x, "a");
  getProperty(x, "m");


  /*

  We’d like to ensure that we’re not accidentally
  grabbing a property that does not exist on the o
  bj, so we’ll place a constraint between the two types


  */

  /*

  "use strict";
    // @errors: 2345
    function getProperty(obj, key) {
        return obj[key];
    }
    let x = { a: 1, b: 2, c: 3, d: 4 };
    getProperty(x, "a");
    getProperty(x, "m");


  */
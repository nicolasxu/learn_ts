interface Lengthwise {
    length: number;
  }

  function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);
    // Now we know it has a .length property, so no more error
    return arg;
  }

  /*

   we’d like to constrain this function to work with any and all
   types that also have the .length property


  */
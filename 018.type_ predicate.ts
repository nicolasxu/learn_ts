function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}
// pet is Fish is our type predicate in this example. 
// A predicate takes the form parameterName is Type, 
// where parameterName must be the name of a parameter 
// from the current function signature.

function isFish2(pet: number | string): pet is string => boolean { // this is wrong
	return true
}



// https://stackoverflow.com/questions/40081332/what-does-the-is-keyword-do-in-typescript


function isString(test: any): test is string{
    return typeof test === "string";
}

function example(foo: any){
    if(isString(foo)){
        console.log("it is a string" + foo);
        console.log(foo.length); // string function
    }
}
example("hello world");

/* 

Using the type predicate test is string in the above format (instead of just using boolean 
for the return type), after isString() is called, if the function returns true, TypeScript 
will narrow the type to string in any block guarded by a call to the function. The compiler 
will think that foo is string in the below-guarded block (and ONLY in the below-guarded block)


*/
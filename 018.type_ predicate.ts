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


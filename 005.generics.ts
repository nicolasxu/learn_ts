interface GenericIdentityFn<T> {
  (arg: T): T;
}

function identity<T>(arg: T): T {
  return arg;
}

  let myIdentity: GenericIdentityFn<number> = identity;

  /*

    "use strict";
    function identity(arg) {
        return arg;
    }
    let myIdentity = identity;

  */
  /*
  we now have a non-generic function signature that is a
  part of a generic type. When we use GenericIdentityFn,
  we now will also need to specify the corresponding type
  argument (here: number), effectively locking in what the
  underlying call signature will use.


  */
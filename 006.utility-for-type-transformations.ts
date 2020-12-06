// please refer to doc here:
//   https://www.typescriptlang.org/docs/handbook/utility-types.html


// Record<Keys,Type>
/*
  Constructs a type with a set of properties Keys of type Type.
  This utility can be used to map the properties of a type to
  another type.

*/
interface PageInfo {
    title: string;
  }

  type Page = "home" | "about" | "contact";

  const nav: Record<Page, PageInfo> = {
    about: { title: "about" },
    contact: { title: "contact" },
    home: { title: "home" },
  };

  nav.about;
  // ^ = const nav: Record



// Partial<Type>
/* Constructs a type with all properties of Type set to
   optional. This utility will return a type that represents
   all subsets of a given type.
*/


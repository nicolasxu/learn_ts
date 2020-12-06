export {}
let message = 'hello world111'
console.log(message)


let isBeginner: boolean = true

console.log(isBeginner)

let words: string = `I am a ${isBeginner }`
words.concat('333')
console.log(words)


let n: null = null
let uu: undefined = undefined

// array with a type
let list2: Array<number> = [1,2,3]

// mixed type array
const foo: (string|number)[] = [ 1, "message" ];
// array with mixed type
const foo3: Array<number | string> = [3, '444']

// mixed type array 2
const foo2: [number, string] = [ 1, "message" ];

// tuple in typescript
const person: [string, number] = ['nick', 22]

// enum
enum Color {Red, Green, Blue} // first color is 0
let myColor:Color = Color.Red
console.log(myColor)

// enum with value
enum Color2 {Red=3, Green=8, Blue=10}
let myColor2: Color2 = Color2.Green
console.log(myColor2)

// any type
let randomValue: any = 33333
let randArr: any[] = [3, '3333', true]

// type conversions
let myVar: unknown = '10' // can not call any method on it
let res: string = String(myVar)
console.log(res)


// function type

function hasName(obj: any): {name: string} {

    return {name: 'nick'}
}
let res2: {name: string} = hasName({})
console.log(res2)

// type inference
let varA = 10
   // varA = true // cause an error, because varA is infered as number by typescript

// union of types
let multiType: number | string = 10
multiType = 'hellow'
    // Useful when return value of func is out of your control


// function with type
function add(num1: number, num2: number): number {
    return num1 + num2
}
add(3, 4)

// function return void
function logMyInput(n1: number, name: string): void {
    console.log(n1)
    console.log(name)
}


// optional function parameter
function add2(num1: number, num2?: number): number {
    const tempVal: number = typeof num2 === 'number'? num2: 33
    return num1 + tempVal
}
let addRes: number = add2(3)
console.log(addRes)

// default function parameter
function add3(n1: number, n2: number = 10): number {
    return n1 + n2
}


// interfaces
interface Person {
    first: string,
    last: string,
    middle?: string
} // can be used in form with optional properties


function fullName(p: Person): string {
    return p.first + ' ' + p.last
}

// generics
/* The type of generic functions is just like those of non-generic
functions, with the type parameters listed first, similarly to
 function declarations:

*/
function identity<T>(arg: T): T {
    return arg;
}

let output = identity<string>("myString") // output: string
let output2 = identity("myString"); // same as above, type is infered

function loggingIdentity<T>(arg: T[]): T[] {
    console.log(arg.length);
    return arg;
}

function loggingIdentity2<T>(arg: Array<T>): Array<T> {
    console.log(arg.length); // Array has a .length, so no more error
    return arg;
} // exactly as loggingIdentity


//////
function identity2<T>(arg: T): T {
    return arg;
  }

  let myIdentity: <T>(arg: T) => T = identity2;
/*

the function signature is used as type

above code is translated to:
"use strict";
function identity2(arg) {
    return arg;
}
let myIdentity = identity2;




*/


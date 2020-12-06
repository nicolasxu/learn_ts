"use strict";
exports.__esModule = true;
var message = 'hello world111';
console.log(message);
var isBeginner = true;
console.log(isBeginner);
var words = "I am a " + isBeginner;
words.concat('333');
console.log(words);
var n = null;
var uu = undefined;
// array with a type
var list2 = [1, 2, 3];
// mixed type array
var foo = [1, "message"];
// array with mixed type
var foo3 = [3, '444'];
// mixed type array 2
var foo2 = [1, "message"];
// tuple in typescript
var person = ['nick', 22];
// enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {})); // first color is 0
var myColor = Color.Red;
console.log(myColor);
// enum with value
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 3] = "Red";
    Color2[Color2["Green"] = 8] = "Green";
    Color2[Color2["Blue"] = 10] = "Blue";
})(Color2 || (Color2 = {}));
var myColor2 = Color2.Green;
console.log(myColor2);
// any type
var randomValue = 33333;
var randArr = [3, '3333', true];
// type conversions
var myVar = '10'; // can not call any method on it
var res = String(myVar);
console.log(res);
// function type
function hasName(obj) {
    return { name: 'nick' };
}
var res2 = hasName({});
console.log(res2);
// type inference
var varA = 10;
// varA = true // cause an error, because varA is infered as number by typescript
// union of types
var multiType = 10;
multiType = 'hellow';
// Useful when return value of func is out of your control
// function with type
function add(num1, num2) {
    return num1 + num2;
}
add(3, 4);
// function return void
function logMyInput(n1, name) {
    console.log(n1);
    console.log(name);
}
// optional function parameter
function add2(num1, num2) {
    var tempVal = typeof num2 === 'number' ? num2 : 33;
    return num1 + tempVal;
}
var addRes = add2(3);
console.log(addRes);
// default function parameter
function add3(n1, n2) {
    if (n2 === void 0) { n2 = 10; }
    return n1 + n2;
}
function fullName(p) {
    return p.first + ' ' + p.last;
}
// generics
/* The type of generic functions is just like those of non-generic
functions, with the type parameters listed first, similarly to
 function declarations:

*/
function identity(arg) {
    return arg;
}
var output = identity("myString"); // output: string
var output2 = identity("myString"); // same as above, type is infered
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
function loggingIdentity2(arg) {
    console.log(arg.length); // Array has a .length, so no more error
    return arg;
} // exactly as loggingIdentity
//////
function identity2(arg) {
    return arg;
}
var myIdentity = identity2;
/*

the function signature is used as type

above code is translated to:
"use strict";
function identity2(arg) {
    return arg;
}
let myIdentity = identity2;




*/

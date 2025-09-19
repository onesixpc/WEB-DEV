console.log("Hello, World!");
// single line comment
/*
  multi-line comment
*/

// "use strict";
// enables strict mode which helps catch common coding mistakes

// variable declarations
let x = 10;
// let is block scoped
const y = 20;
// const is block scoped and cannot be reassigned
var z = 30;
// var is function scoped

//primitive data types
let str = "Hello"; // string
let num = 100; // number
let bool = true; // boolean
let n = null; // null
let undef; // undefined

// non-primitive data types
let obj = { name: "Alice", age: 25 }; // object
let arr = [1, 2, 3, 4, 5]; // array
let func = function() { return "I am a function"; }; // function

// type checking
console.log(typeof str); // string
console.log(typeof num); // number
console.log(typeof bool); // boolean
console.log(typeof n); // object (this is a known quirk in JavaScript)
console.log(typeof undef); // undefined
console.log(typeof null); // object
console.log(typeof obj); // object
console.log(typeof arr); // object
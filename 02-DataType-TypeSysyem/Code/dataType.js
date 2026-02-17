/* Data Types in JavaScript
JavaScript has 7 primitive data types: 
number, string, boolean, null, undefined, symbol, and bigint.
1. Number: Represents both integer and floating-point numbers.
2. String: Represents a sequence of characters enclosed in quotes.
3. Boolean: Represents a logical entity that can be either true or false.
4. Null: Represents the intentional absence of any object value.
5. Undefined: Represents a variable that has been declared but not assigned a value.
6. Symbol: Represents a unique identifier (introduced in ES6).
7. BigInt: Represents integers with arbitrary precision (introduced in ES2020).
8. Object: Represents a collection of properties and methods.

Additionally, there is a non-primitive data type called object.
1. Object: Represents a collection of properties and methods. Objects can be created using object literals, constructors, or classes.

2. Array: A special type of object used to store ordered collections of values. Arrays can hold values of any data type, including other arrays and objects.

3. Function: A special type of object that can be called and executed. Functions can be defined using function declarations, function expressions, or arrow functions.
*/



let a = 10;
let b = 4.5;
console.log(typeof(a),typeof(b)); // number number

let c = "Hello";
console.log(typeof(c)); // string ("")('')(``) are all string literals

let d = true;
let d1 = false;
console.log(typeof(d), typeof(d1)); // boolean boolean

let e = null;
console.log(typeof(e)); // object

let f = undefined;
console.log(typeof(f)); // undefined

let g = Symbol("id");
console.log(typeof(g)); // symbol

let h = 1234567890123456789012345678901234567890n;
console.log(typeof(h)); // bigint
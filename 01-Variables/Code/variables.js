// var --> Declares a variable, can be re-declared and updated (use with caution)
// let --> Declares a block-scoped variable, can be updated but not re-declared
// const --> Declares a block-scoped variable, cannot be updated or re-declared (use for constants)



// var a = 10;
// var b = 20;
// var c = a + b;
// console.log("Sum of a and b is: ", c);

// let a = 10;
// let b = 20;
// let c = a + b;
// console.log("Sum of a and b is: ", c);
// 

// const a = 10;
// const b = 20;
// const c = a + b;
// console.log("Sum of a and b is: ", c); 

var a = 10;
var a = 20; // This will not throw an error, but it will overwrite the previous value of a
a = 30; // This will change the value of a to 30
console.log("Value of a is: ", a); // Output will be 30


let b = 10;
// let b = 20; // This will throw an error because b has already been declared
b = 30; // This will change the value of b to 30
console.log("Value of b is: ", b); // Output will be 30


const c = 10;
// const c = 20; // This will throw an error because c has already been declared
// c = 30; // This will throw an error because c is a constant and cannot be reassigned
console.log("Value of c is: ", c); // Output will be 10


// int a = "hello"; static typing programming languages

var a = 1;
var a = "hello";
var d = true; // dynamic typing, variable can hold any type of data



// scope in javaScript
// global scope
var a = 10;
function test() {
    console.log(a);
}
test(); // 10

// local scope
function test2() {
    var b = 20;
    console.log(b);
}
test2(); // 20

// block scope
if (true) {
    let c = 30;
    console.log(c); // 30
}

// var = function scope sirf function ke andar hi access hota hai
// let and const = block scope sirf block ke andar hi access hota hai 


// script scope
// variables declared with var, let, or const outside of any function or block are in the global scope and can be accessed from anywhere in the code.


// Module scope
// In JavaScript, when you use modules (e.g., with ES6 import/export), each module has its own scope. Variables and functions declared in a module are not accessible outside of that module unless they are explicitly exported. This helps to prevent naming conflicts and keeps the code organized.

    
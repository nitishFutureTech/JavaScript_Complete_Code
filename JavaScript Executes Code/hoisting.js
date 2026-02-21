console.log(a);
var a = 10;
// Output: undefined

// Explanation:
// In JavaScript, variables declared with 'var' are hoisted to the top of their scope and initialized with 'undefined'. Therefore, when 'console.log(a)' is executed before the declaration of 'a', it logs 'undefined' instead of throwing an error.

// console.log(b);
// let b = 20;
// Output: ReferenceError: Cannot access 'b' before initialization
// Explanation:
// Variables declared with 'let' (and 'const') are also hoisted, but they are not initialized until their declaration is evaluated. This means that accessing 'b' before its declaration results in a ReferenceError, as it is in the "temporal dead zone" until the declaration is reached.



function foo() {
    console.log(c);
    var c = 30;
}
foo();
// Output: undefined
// Explanation:
// Similar to the first example, the variable 'c' is hoisted to the top of the function scope and initialized with 'undefined'. Therefore, when 'console.log(c)' is executed, it logs 'undefined'.


greet();
function greet() {
    console.log("Hello, World!");
}
// Output: "Hello, World!"
// Explanation:
// Function declarations are also hoisted to the top of their scope. This means that the 'greet' function is available before its declaration, allowing it to be called successfully without throwing an error.

greet2();
var greet2 = function() {
    console.log("Hello, again!");
};
// Output: TypeError: greet2 is not a function
// Explanation:
// In this case, 'greet2' is declared using 'var', which means it is hoisted and initialized with 'undefined'. When 'greet2()' is called before the assignment of the function expression, it results in a TypeError because 'greet2' is not yet a function at that point in the code.


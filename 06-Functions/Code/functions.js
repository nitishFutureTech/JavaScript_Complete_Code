// function is a block of code that performs a specific task
// function declaration
function greet(name) {
    console.log("Hello, " + name + "!");
}
// function expression
const greet2 = function(name) {
    console.log("Hello, " + name + "!");
}
// arrow function
const greet3 = () => console.log("Hello");

// higher-order function
function greet5(name) {
    return function() {
        console.log("Hello, " + name + "!");
    }
}
const greetNitish = greet5("Higher-order function");
greetNitish();


// callback function
function greet4(name, callback) {
    console.log("Hello, " + name + "!");
    callback();
}

greet4("Nitish", () => console.log("Welcome to JavaScript!"));


// anonymous function
(function() {
    console.log("This is an anonymous function");
})(); // immediately invoked function expression (IIFE)

// calling a function
greet("Nitish");
greet2("Aakash");
greet3();
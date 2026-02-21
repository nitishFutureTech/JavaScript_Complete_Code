# ✅ What is a Function in JavaScript?
### 📌 Definition:

A function is a reusable block of code that performs a specific task.
It runs only when it is called (invoked).

👉 Instead of writing the same code again and again, we put it inside a function and reuse it.

-----------------------------------------------------------
# ✅ Why We Use Functions?

- To avoid repeating code

- To make code organized

- To improve readability

- To make debugging easier

- To break big problems into smaller parts

----------------------------------------------------------
# ✅ Basic Syntax of Function
```JS
function functionName(parameters) {
    // code to be executed
}
```
#### Example:
```JS
function greet() {
    console.log("Hello, Nitish!");
}

greet(); // Calling the function
```

#### Output:
```JS
Hello, Nitish!
```
-----------------------------------------------------------
# ✅ Parts of a Function
| Part |	Meaning |
|---------|-----------|
| function	| Keyword to create function |
| functionName |	Name of function |
|parameters |	Input values |
| {} |	Function body |
| return |	Sends value back |

-----------------------------------------------------------
# ✅ Function with Parameters

Parameters are values passed into the function.
```JS
function greet(name) {
    console.log("Hello " + name);
}

greet("Nitish");
```
#### Output:
```JS
Hello Nitish
```
-----------------------------------------------------------
# ✅ Function with Return Value

Return sends result back.
```JS
function add(a, b) {
    return a + b;
}

let result = add(5, 3);
console.log(result);
```
#### Output:
```JS
8
```
-----------------------------------------------------------
# ✅ Types of Functions in JavaScript
## 1️⃣ Function Declaration (Normal Function)
```JS
function sayHello() {
    console.log("Hello World");
}
sayHello();
```
✔ Can be called before declaration (Hoisting supported)

## 2️⃣ Function Expression

Function stored inside a variable.
```JS
let greet = function() {
    console.log("Hello!");
};

greet();
```
❌ Cannot call before declaration

## 3️⃣ Arrow Function (ES6)

Short syntax function.
```JS
const add = (a, b) => {
    return a + b;
};

console.log(add(4, 6));
```
#### Shorter version:
```JS
const add = (a, b) => a + b;
```
## 4️⃣ Anonymous Function

Function without name.
```JS
setTimeout(function() {
    console.log("Hello after 2 seconds");
}, 2000);
```
## 5️⃣ Immediately Invoked Function (IIFE)

Runs immediately after creation.
```JS
(function() {
    console.log("I run immediately!");
})();
```
-----------------------------------------------------------
# ✅ Default Parameters
```JS
function greet(name = "Guest") {
    console.log("Hello " + name);
}

greet();        // Hello Guest
greet("Nitish"); // Hello Nitish
```
-----------------------------------------------------------
# ✅ Function Scope

Scope means where variables can be accessed.

#### Example:
```JS
function test() {
    let x = 10;
    console.log(x);
}

test();
// console.log(x); ❌ Error (outside function)
```
-----------------------------------------------------------
# ✅ Local vs Global Scope
```JS
let a = 5; // Global

function check() {
    let b = 10; // Local
    console.log(a); // accessible
}

check();
```
-----------------------------------------------------------
# ✅ Callback Function

Function passed as argument to another function.
```JS
function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}

function sayBye() {
    console.log("Goodbye!");
}

greet("Nitish", sayBye);
```
-----------------------------------------------------------
# ✅ Recursive Function

Function calling itself.
```JS
function factorial(n) {
    if (n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(5));
```
#### Output:
```JS
120
```
-----------------------------------------------------------
# ✅ Function Hoisting

Only works with function declaration.
```JS
hello();

function hello() {
    console.log("Hoisting works!");
}
```
-----------------------------------------------------------
# ✅ Difference Between Normal Function and Arrow Function
| Normal Function |	Arrow Function |
|--------------------|-----------------|
| Has its own this	| Does not have its own this |
| Can be hoisted	| Cannot be hoisted |
| Traditional syntax |	Short syntax |
| Can use arguments object |	Cannot use arguments |

-----------------------------------------------------------
# ✅ Real Life Example

#### Example: Calculator
```JS
function calculator(a, b, operator) {
    if (operator === "+") {
        return a + b;
    } else if (operator === "-") {
        return a - b;
    } else if (operator === "*") {
        return a * b;
    } else if (operator === "/") {
        return a / b;
    } else {
        return "Invalid Operator";
    }
}

console.log(calculator(10, 5, "*"));
```
-----------------------------------------------------------
# ✅ Important Concepts

- Function is first-class citizen in JS

- Can store in variable

- Can pass as argument

- Can return from another function

#### Example:
```JS
function outer() {
    return function inner() {
        console.log("I am inner function");
    };
}

let result = outer();
result();
```
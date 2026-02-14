# Variables in JavaScript
--------------------------------------------------------------------------

## 1️⃣ What is a Variable?
A variable is a container used to store data.

Example:
--------------------------------------------------------------------------
```JavaScript
let name = "Nitish";
console.log(name); // Output-> Nitish
```

Here:

- `let` → keyword to declare variable<br>
- `name` → variable name<br>
- `"Nitish"` → value

## 2️⃣ Ways to Declare Variables in JavaScript
JavaScript has 3 keywords for declaring variables:
- `var`
- `let`
- `const`

### Rules for variable declaration:
1. Variable names are case sensitive;
2. “a” & “A” is different.
3. Only letters, digits, underscore( _ ) and $ is allowed. (not even space)
4. Only a letter, underscore( _ ) or $ should be 1st character.
5. Reserved words cannot be variable names.

### 🔹 1. var (Old Method)
Variable can be re-declared & updated. A global scope variable.

```JavaScript
var age = 20;
```

#### Features:

- Function scoped
- Can be re-declared
- Can be re-assigned
- Hoisted

Example:
--------------------------------------------------------------------------
```JS
var x = 10;
var x = 20;   // allowed
x = 30;       // allowed
```

⚡ Problem: It can create scope issues and bugs.

--------------------------------------------------------------------------

### 🔹 2. let (Modern & Recommended)
Variable cannot be re-declared but can be updated. A block scope variable.

```JS
let city = "Delhi";
```

#### Features:

- Block scoped
- Cannot be re-declared
- Can be re-assigned

Example:
--------------------------------------------------------------------------
```JS
let a = 5;
a = 10;  // allowed

let a = 20;  // ❌ Error
```
--------------------------------------------------------------------------

### 🔹 3. const (Constant Variable)
Variable cannot be re-declared or updated. A block scope variable.
(variables declared with const keyword must have declaration & initialization both)

```JS
const pi = 3.14;
```

#### Features:

- Block scoped
- Cannot be re-declared
- Cannot be re-assigned

Example:
--------------------------------------------------------------------------
```JS
const pi = 3.14;
pi = 3.15;   // ❌ Error
```

## 3️⃣ Scope of Variables
### 🔹 Global Scope

```JS
let a = 10;

function test() {
   console.log(a);  // accessible
}
```
--------------------------------------------------------------------------
### 🔹 Function Scope (var)

```JS
function demo() {
   var x = 5;
}

console.log(x);  // ❌ Error
```
--------------------------------------------------------------------------

### 🔹 Block Scope (let & const)

```JS
{
   let y = 20;
}

console.log(y);  // ❌ Error
```
--------------------------------------------------------------------------

## 4️⃣ Hoisting
JavaScript moves variable declarations to the top of their scope.

### 🔹 var Hoisting
```JS
console.log(a);
var a = 10;
```
Output:
```JS
undefined
```

Behind the scenes:
```JS
var a;
console.log(a);
a = 10;
```
--------------------------------------------------------------------------

### 🔹 let & const Hoisting (Temporal Dead Zone)

```JS
console.log(b);
let b = 20;
```

❌ ReferenceError

This happens because of the Temporal Dead Zone (TDZ).

--------------------------------------------------------------------------

## 5️⃣ Difference Between var, let, and const

| Feature   | var | let   |  const  |
|-----------|-----|-------|----------|
| Scope | Function  | Block  |  Block |
| Re-declare  | Yes  | No |  No  |
| Re-assign  | Yes | Yes  |  No  |
| Hoisting | Yes | Yes (TDZ) | Yes (TDZ)
--------------------------------------------------------------------------

# 💠 Practics Questions
```JS
1 - Declare a variable name using let and assign your name to it. Print it in console.

2 - Declare a variable age using var and assign your age. Then change its value.

3 - Create a constant variable pi and assign value 3.14. Try changing it. What happens?

4 - Declare three variables in one line: a, b, c with values 10, 20, 30.

5 - Create a variable without assigning a value. Print it. What is the output?
```
# 1️⃣ What is a Data Type?
A data type defines what kind of value a variable holds.

#### Examples:

- `"Hello"` → String

- `25` → Number

- `true` → Boolean

JavaScript automatically determines the type of data stored in a variable.

--------------------------------------------------------------------------
# 2️⃣ JavaScript Data Types
JavaScript has two main categories of data types:
```JS
1. Primitive Data Types
2. Non-Primitive (Reference) Data Types
```
--------------------------------------------------------------------------
# ✅ 1. Primitive Data Types
Primitive types store single, simple values.

JavaScript has 7 primitive types:

1 - String

2 - Number

3 - Boolean

4 - Undefined

5 - Null

6 - BigInt

7 - Symbol

--------------------------------------------------------------------------
## 1️⃣ String

Used to store text.
```JS
let name = "Nitish";
let message = 'Hello World';

console.log(typeof name);   // string
```
--------------------------------------------------------------------------
## 2️⃣ Number

Used for integers and decimals.
```JS
let age = 20;
let price = 99.99;

console.log(typeof age);   // number
```
💠JavaScript does NOT have separate `int` and `float` types.
Everything is simply `number`.

--------------------------------------------------------------------------
## 3️⃣ Boolean

Stores `true` or `false`.
```JS
let isLoggedIn = true;

console.log(typeof isLoggedIn);   // boolean
```
--------------------------------------------------------------------------
## 4️⃣ Undefined

A variable declared but not assigned a value.
```JS
let x;

console.log(x);           // undefined
console.log(typeof x);    // undefined
```
--------------------------------------------------------------------------
## 5️⃣ Null

Represents an intentional empty value.
```JS
let data = null;

console.log(data);        // null
console.log(typeof data); // object ❗
```

#### ⚡ Important:

`typeof null` returns `"object"` (this is a historical JavaScript bug).

--------------------------------------------------------------------------
## 6️⃣ BigInt

Used for very large numbers beyond the normal limit.
```JS
let bigNumber = 123456789012345678901234567890n;

console.log(typeof bigNumber);   // bigint
```
--------------------------------------------------------------------------
## 7️⃣ Symbol

Used to create unique identifiers.
```JS
let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 === id2);  // false (always unique)
```
--------------------------------------------------------------------------
# ✅ 2. Non-Primitive (Reference) Data Types

These store references (memory addresses), not actual values directly.

Main reference types:

1 - Object

2 - Array

3 - Function

--------------------------------------------------------------------------
## 1️⃣ Object

Stores data in key-value pairs.
```JS
let student = {
    name: "Nitish",
    age: 20
};

console.log(typeof student);  // object
```
--------------------------------------------------------------------------
## 2️⃣ Array

Used to store multiple values in a list.
```JS
let numbers = [10, 20, 30];

console.log(typeof numbers);  // object
```

⚡ Arrays are technically objects in JavaScript.

--------------------------------------------------------------------------
## 3️⃣ Function

Functions are also objects.
```JS
function greet() {
    console.log("Hello");
}

console.log(typeof greet);  // function
```
--------------------------------------------------------------------------
# 3️⃣ JavaScript Type System
🔹 JavaScript is Dynamically Typed

This means:

- You don’t declare the type of a variable.

- The type is determined at runtime.

- A variable can change its type.

#### Example:
```JS
let value = 10;       // number
value = "Hello";      // string
value = true;         // boolean

console.log(value);
```
--------------------------------------------------------------------------
# 🔹 4. What is a Type System?

Now let’s understand the main concept.

## 👉 Definition:

A Type System is a set of rules that programming languages use to define and check data types.

It decides:

- When types are checked

- How strictly they are checked

- Whether type conversion is allowed

--------------------------------------------------------------------------
# 🔹 5. Types of Type Systems

There are two major classifications:
## 1️⃣ Static vs Dynamic Typing

### 🔹 Static Typing

Type is checked at compile time.

Example: C, C++, Java
```JS
int age = 21;
age = "Nitish";   // ❌ Error
```

You must define type before using.

--------------------------------------------------------------------------
### 🔹 Dynamic Typing

Type is checked at runtime.

Example: JavaScript, Python
```JS
let x = 10;
x = "Hello";  // ✅ Allowed
```

JavaScript is Dynamically Typed Language.

This is called Dynamic Typing.

--------------------------------------------------------------------------
# 🔹 1️⃣ JavaScript is Dynamically Typed

You don't need to define type.
```JS
let x = 10;
x = "Hello";   // Allowed
x = true;      // Allowed
```

Type is decided at runtime.

--------------------------------------------------------------------------
# 🔹 2️⃣ JavaScript is Weakly Typed

It automatically converts types.

Example:

console.log("5" + 2);  // "52"
console.log("5" - 2);  // 3
console.log(true + 1); // 2


This is called:

## 🔥 Type Coercion
# 🔹 Type Coercion in JS
## 1️⃣ Implicit Coercion

Automatic conversion:
```JS
"5" + 5   // "55"
"5" - 5   // 0
true + 1  // 2
false + 1 // 1
```
--------------------------------------------------------------------------
## 2️⃣ Explicit Conversion

Manual conversion:
```JS
Number("10");    // 10
String(100);     // "100"
Boolean(1);      // true
```
--------------------------------------------------------------------------
# 🔥 Truthy and Falsy Values (Very Important)
## 🔹 Falsy Values:

- false

- 0

- ""

- null

- undefined

- NaN

Everything else is truthy.
```JS
if("Hello") {
  console.log("Truthy");
}
```
--------------------------------------------------------------------------
# 🔥 typeof Operator

Used to check type.
```JS
typeof 10;        // "number"
typeof "Hello";   // "string"
typeof true;      // "boolean"
typeof undefined; // "undefined"
typeof null;      // "object"
typeof {};        // "object"
```
--------------------------------------------------------------------------
# 🔥 Primitive vs Reference (Memory Concept)
### Primitive → Stored by Value
```JS
let a = 10;
let b = a;

b = 20;

console.log(a); // 10
```

Copy is separate.

--------------------------------------------------------------------------
## Reference → Stored by Reference
```JS
let obj1 = { name: "Nitish" };
let obj2 = obj1;

obj2.name = "Rahul";

console.log(obj1.name); // Rahul
```

Both point to same memory.

--------------------------------------------------------------------------
# 🔥 Equality in JavaScript (Very Important)
## `==` (Loose Equality)

Allows type conversion.
```js
"5" == 5   // true
```
--------------------------------------------------------------------------
## `===` (Strict Equality)

No type conversion.
```js
"5" === 5  // false
```

👉 Always use `===`
# JavaScript Operators
![op](image/op.png)

## Types of Operators
- Arithmetic Operators
- Assignment Operators
- Comparison Operators
- Logical Operators
- Increment / Decrement
- Ternary Operator (Shortcut If-Else)
- Type Operators
- String Operators
- Nullish & Optional (Modern JS 🔥)
- Bitwise Operators (Advanced)

![type-op](image/type-op.png)

# How Logical OR Operator Works?
![work](image/work.png)

# How Logical AND Operator Works?
![and](image/and.png)

# 1️⃣ Arithmetic Operators
Used for mathematical calculations.
```JS
let a = 10;
let b = 3;

console.log(a + b);  // 13 (Addition)
console.log(a - b);  // 7  (Subtraction)
console.log(a * b);  // 30 (Multiplication)
console.log(a / b);  // 3.33 (Division)
console.log(a % b);  // 1 (Remainder / Modulus)
console.log(a ** b); // 1000 (Exponent / Power)
```
-----------------------------------------------------------
# 2️⃣ Assignment Operators
Used to assign values to variables.

let x = 10;
```JS
x += 5;  // x = x + 5
x -= 2;  // x = x - 2
x *= 3;  // x = x * 3
x /= 2;  // x = x / 2
x %= 2;  // x = x % 2
```
-----------------------------------------------------------
# 3️⃣ Comparison Operators
Used to compare two values.

Return value is always `true` or `false`.
```JS
let a = 5;
let b = "5";

console.log(a == b);   // true  (only value check)
console.log(a === b);  // false (value + datatype check)
console.log(a != b);   // false
console.log(a !== b);  // true
console.log(a > 3);    // true
console.log(a < 10);   // true
console.log(a >= 5);   // true
console.log(a <= 4);   // false
```
#### 🔥 Important:

- `==` → compares only value

- `===` → compares value + type (recommended)
----------------------------------------
# 4️⃣ Logical Operators
Used to combine multiple conditions.
```JS
let age = 20;
let hasID = true;

console.log(age > 18 && hasID);  // true (AND)
console.log(age > 25 || hasID);  // true (OR)
console.log(!hasID);             // false (NOT)
```
- `&&` → AND (both must be true)

- `||` → OR (at least one true)

- `!` → NOT (reverse result)
----------------------------------------
# 5️⃣ Increment & Decrement
```JS
let x = 5;

x++;  // Increment → 6
x--;  // Decrement → 5
```
#### Pre vs Post
```JS
let a = 5;
console.log(++a); // 6 (Pre-increment)

let b = 5;
console.log(b++); // 5 (Post-increment)
```
----------------------------------------
# 6️⃣ Ternary Operator (Shortcut of if-else)
```JS
let age = 18;

let result = (age >= 18) ? "Adult" : "Minor";
console.log(result);
```
#### Syntax:
```JS
condition ? value_if_true : value_if_false
```
----------------------------------------
# 7️⃣ Type Operator
```JS
let name = "Nitish";

console.log(typeof name);  // string
```
----------------------------------------
# 8️⃣ String Operator
```JS
let first = "Nitish";
let last = "Kushwaha";

console.log(first + " " + last);
```
----------------------------------------
# 9️⃣ Nullish & Optional Operators (Modern JS)
### Nullish Coalescing (??)

Returns right value if left is `null` or `undefined`.
```JS
let user = null;
console.log(user ?? "Guest");  // Guest
```
### Optional Chaining (?.)

Prevents errors if property does not exist.
```JS
let person = {};
console.log(person.address?.city);  // undefined (no error)
```
----------------------------------------
# 🔟 Bitwise Operators (Advanced)
```JS
console.log(5 & 1);  // AND
console.log(5 | 1);  // OR
console.log(5 ^ 1);  // XOR
```
Used in low-level programming and advanced logic.

----------------------------------------
# 📌 Summary Table
| Type | Operators |
|-------|-----------|
| Arithmetic |	+ - * / % ** |
| Assignment |	= += -= *= /= |
| Comparison |	== === != !== > < |
| Logical |	&& | 
| Ternary |	? : |
| Type |	typeof |
| Modern |	?? ?. |
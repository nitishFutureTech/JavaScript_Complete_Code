// Arithmetic Operators
let a = 10;
let b = 5;
console.log(a + b); // Addition
console.log(a - b); // Subtraction
console.log(a * b); // Multiplication   
console.log(a / b); // Division
console.log(Math.floor(a / b)); // Floor Division
console.log(a % b); // Modulus
console.log(a ** b); // Exponentiation



// Assignment Operators
let c = 20;
c += 5;
console.log(c); // 25
c -= 5;
console.log(c); // 20
c *= 2;
console.log(c); // 40
c /= 4;
console.log(c); // 10
c **= 2;
console.log(c); // 100
c %= 3;
console.log(c); // 1   


// Comparison Operators
let x = 10;
let y = 20;
console.log(x == y); // Equality only checks value
console.log(x === y); // Strict Equality this checks both value and type
console.log(x != y); // Inequality
console.log(x > y); // Greater than
console.log(x < y); // Less than    
console.log(x >= y); // Greater than or equal to
console.log(x <= y); // Less than or equal to


// Logical Operators
let p = true;
let q = false;
console.log(p && q); // Logical AND
console.log(p || q); // Logical OR
console.log(!p); // Logical NOT


// Bitwise Operators
let m = 5; // 0101 in binary
let n = 3; // 0011 in binary
console.log(m & n); // Bitwise AND
console.log(m | n); // Bitwise OR
console.log(m ^ n); // Bitwise XOR
console.log(~m); // Bitwise NOT
console.log(m << 1); // Left Shift
console.log(m >> 1); // Right Shift 



// Unary Operators
let num = 10;
console.log(-num); // Unary Negation
console.log(+num); // Unary Plus
console.log(++num); // postfix Increment 
console.log(--num); // prefix Decrement


// Ternary Operator
let age = 18;
let canVote = (age >= 18) ? "Yes" : "No";
console.log(canVote); // Yes


// type conversion Operators
let strNum = "123";
let numValue = Number(strNum);
console.log(numValue); // 123
let boolValue = Boolean(numValue);
console.log(boolValue); // true
let strValue = String(numValue);
console.log(strValue); // "123" 



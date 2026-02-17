# 1. Conditional Statements (Decision Making)
These statements allow the program to execute a specific block of code only if a certain condition is true.

# A. `if` Statement

Used to execute a block of code only if the specified condition is true.

- #### Syntax:
```JS
if (condition) {
    // code to be executed if condition is true
}
```
- #### Example:
```JS
let age = 20;
if (age >= 18) {
    console.log("You are eligible to vote.");
}
```
-----------------------------------------------------------
# B. `if...else` Statement
Used when you want to execute one block of code if the condition is true, and a different block if the condition is false.

- #### Syntax:
```JS
if (condition) {
    // code if true
} else {
    // code if false
}
```
- #### Example:
```JS
let number = 10;
if (number % 2 === 0) {
    console.log("Even Number");
} else {
    console.log("Odd Number");
}
```
-----------------------------------------------------------
# C. if...else if...else Ladder
Used to check multiple conditions in a sequence.

- #### Example:
```JS
let marks = 85;

if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 80) {
    console.log("Grade B");
} else {
    console.log("Grade C");
}
```
-----------------------------------------------------------
# D. switch Statement
The `switch` statement is used to perform different actions based on different conditions. It is often cleaner than using many `if...else if` statements.

- #### Syntax:
```JS
switch(expression) {
    case x:
        // code block
        break;
    case y:
        // code block
        break;
    default:
        // code block executes if no case matches
}
```

- #### Example:
```JS
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid Day");
}
```
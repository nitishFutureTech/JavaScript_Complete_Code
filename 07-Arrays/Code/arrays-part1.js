// Arrays in JS 
// An array is a data structure that can hold multiple values at once.

// Creating an array
// let fruits = ["Apple", "Banana", "Cherry"];
// console.log(fruits); // Output: ["Apple", "Banana", "Cherry"]
// fruits[1] = "Blueberry"; // Modifying an element
// console.log(fruits); // Output: ["Apple", "Blueberry", "Cherry"]

// let arr = [1,"Nitish",true,null,""]; // An array can hold different types of data
// console.log(arr); // Output: [1, "Nitish", true, null, ""] 


// let arr3 = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ] // This is a 2D array (array of arrays)
// console.log(arr3[0][2]); // Output: 3


// Array Methods
let fruits = ["Apple", "Banana", "Cherry"];

// length
console.log(fruits.length); // Output: 3

// indexOf
console.log(fruits.indexOf("Banana")); // Output: 1

// includes
console.log(fruits.includes("Cherry")); // Output: true

// push
fruits.push("Date");
console.log(fruits); // Output: ["Apple", "Banana", "Cherry", "Date"]

// pop
fruits.pop();
console.log(fruits); // Output: ["Apple", "Banana", "Cherry"]

// shift
fruits.shift();
console.log(fruits); // Output: ["Banana", "Cherry"]

// unshift
fruits.unshift("Apricot");
console.log(fruits); // Output: ["Apricot", "Banana", "Cherry"]

// slice
let citrus = fruits.slice(0, 2);
console.log(citrus); // Output: ["Apricot", "Banana"]

// splice
let removed = fruits.splice(1, 1); // Removes 1 element at index 1
console.log(removed); // Output: ["Banana"]
console.log(fruits); // Output: ["Apricot", "Cherry"]







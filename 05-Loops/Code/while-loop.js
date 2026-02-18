// while loop use to repeat a block of code as long as a specified condition is true.

// Example: Print numbers from 1 to 5
let i = 1; // Initialize the counter variable
while (i <= 5) { // Check the condition
    console.log(i); // Print the current value of i
    i++; // Increment the counter variable
}

// Example: Calculate the factorial of a number
let number = 5; // The number to calculate the factorial of
let factorial = 1;
while (number > 1) { // Check the condition
    factorial *= number; // Multiply the current value of factorial by number
    number--; // Decrement the number
}
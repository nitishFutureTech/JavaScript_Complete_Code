// if statement
let age = 20;

if (age >= 18) {
  console.log("You are eligible to vote.");
}

// if-else statement
let time = 10;

if (time < 12) {
  console.log("Good morning!");
} else {
  console.log("Good afternoon!");
}

// if-else-if statement
let score = 85;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else if (score >= 60) {
  console.log("Grade: D");
} else {
  console.log("Grade: F");
}

// Nested if statement
let number = 15;
if (number > 0) {
  if (number % 2 === 0) {
    console.log("The number is positive and even.");
  } else {
    console.log("The number is positive and odd.");
  }
} else {
  console.log("The number is not positive.");
}


// using logical operators
let age2 = 22;
let citizen = true;

if (age2 >= 18 && citizen) {
  console.log("Eligible to vote");
} else {
  console.log("Not eligible");
}


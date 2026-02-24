let person = {
    fName : "Nitish",
    lName : "Kumar",
    age : 20
}

// shallow copy
// let person2 = person;
// person2.age = 213;
// console.log(person);
// console.log(person2);


// deep copy => ye sirf object me kaam karta nested object me nahi
let person2 = {...person};
person2.age = 213;
console.log(person);
console.log(person2);
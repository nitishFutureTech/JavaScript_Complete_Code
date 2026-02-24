let person = {
    fName : "Nitish",
    lName : "Kumar",
    age : 21
}

let key = Object.keys(person);
console.log(key);


// for(let key in person){
//     console.log(person[key]); 
// }

// let a = Object.getOwnPropertyDescriptors(person);
// console.log(a);

// Object.defineProperty(person,"lName",{
//     value : "Dar",
//     enumerable : false
// })
// let a = Object.getOwnPropertyDescriptors(person);
// console.log(a);

// for(let key in person){
//     console.log(person[key]); 
// }
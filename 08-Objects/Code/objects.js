// let person = {
//     fName : "Nitish",
//     lName : "Kumar",
//     age : 21,
//     isMarried : false,
//     city : {
//         name : "Nichlaul",
//         country : "India",
//         location : "North",
//         area : 123,
//         places : {
//             place1 : "GKP",
//             place2 : "Kushinagar",
//             place3 : "UP"
//         }
//     },
//     skills : ["HTML","CSS","C","Python","JS"]

// }
// console.log(person.city.places.place2);

// let person = {
//     fName : "Nitish",
//     lName : "Kumar",
//     age : 21,
//     sayMyName : function(){
//         console.log(person.fName + " " + person.lName);
//     }
// }
// person.sayMyName();


let person = {
    fName : "Nitish",
    lName : "Kumar",
    age : 20
}

let a = Object.getOwnPropertyNames(person);
console.log(a);


// let a = Object.hasOwn(person,"fName");
// console.log(a);



// Object.seal(person);

// // Object.freeze(person);
// person.fName = "Akash";
// person.hello = "kya haal hai";
// delete person.fName;
// console.log(person);


// let person2 = Object.assign({},person);
// console.log(person2);

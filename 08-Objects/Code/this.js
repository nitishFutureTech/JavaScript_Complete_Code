function sayMyName(){
    console.log(this.age);
}


let person = {
    fname : "Nitish",
    age : 20,
    sayMyName : sayMyName
}


let person2 = {
    fname : "Akash",
    age : 25,
    sayMyName : sayMyName
}
person.sayMyName();
person2.sayMyName();
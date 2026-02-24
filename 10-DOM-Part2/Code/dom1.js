function fun(){
            let container = document.getElementById("container");
           let h2 = document.createElement("h2");
           let heading = document.querySelector(".heading");
           h2.textContent = "Nitish Kumar"; 
            // container.appendChild(h2); // yah single element ko add karta hai
            // container.append("Hello",h2,"Bye"); // multiple elements can be added
            h2.style.backgroundColor = "yellow";
            
           // container.prepend(h2);
            container.insertBefore(h2,heading);
        }


let old = document.getElementById("old");
let h1 = document.getElementById("main");
let mark = document.createElement("mark");
mark.textContent = "Hello Nitish Kumar"
function replace(){
    // old.replaceChild(mark,h1);
    old.replaceWith(mark);
}
// function changeText(){
//     let h1 = document.getElementById("heading");
//     h1.textContent = "Aur sab kya haal chal bhaiyo"
//     h1.style.color = "red";
// }


// let p = document.getElementsByClassName("info");
// function changeText(){
//     p[0].style.color = "red";
//     p[0].style.fontSize = "40px";
//     p[1].style.color = "blue";
//     p[1].style.fontSize = "20px";
//     p[2].style.color = "green";
// }


// let h1 = document.getElementsByTagName("h1");
// function changeText(){
//     for(let i = 0; i < h1.length; i++){
//         h1[i].style.color = "red";
//     }   
// }



let para = document.getElementsByName("para");
function changeText(){
    para[0].style.backgroundColor = "red";
    para[0].style.border = "none";
    para[0].placeholder = "Enter your name";
    para[0].value = "Hello World";
    console.dir(para[0]);
    
}


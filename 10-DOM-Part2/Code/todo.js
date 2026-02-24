let list = document.querySelector("#list");

// Page load hote hi tasks load karo
document.addEventListener("DOMContentLoaded", loadTasks);

function fun(event) {
    event.preventDefault();

    let inputField = document.querySelector("#input");
    let input = inputField.value;

    if (input === "") {
        alert("Please enter a task");
        return;
    }

    createTaskElement(input);

    saveTasks(); // Task add hote hi save karo

    inputField.value = "";
}

// Task create karne ka function
function createTaskElement(taskText) {
    let li = document.createElement("li");
    let btn = document.createElement("button");

    btn.innerText = "❌";
    btn.style.backgroundColor = "transparent";
    btn.style.border = "none";
    btn.style.cursor = "pointer";
    

    btn.onclick = function () {
        li.remove();
        saveTasks(); // Remove karte hi update karo
    };

    li.appendChild(document.createTextNode(taskText));
    li.appendChild(btn);
    list.appendChild(li);
}

// Save tasks in localStorage
function saveTasks() {
    const tasks = Array.from(list.children).map(li =>
        li.firstChild.textContent
    );

    localStorage.setItem("todoTasks", JSON.stringify(tasks));
}

// Load tasks from localStorage
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("todoTasks")) || [];

    tasks.forEach(task => {
        createTaskElement(task);
    });
}
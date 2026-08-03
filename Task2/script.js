

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const formMessage = document.getElementById("formMessage");
    if (name === "" || email === "" || message === "") {

        formMessage.textContent =
            "Please fill in all fields.";

        formMessage.style.color = "red";

        return;
    }
    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

        formMessage.textContent =
            "Please enter a valid email address.";

        formMessage.style.color = "red";

        return;
    }
    formMessage.textContent =
        "Form submitted successfully!";

    formMessage.style.color = "green";

    contactForm.reset();

});
const taskInput =
    document.getElementById("taskInput");

const addTask =
    document.getElementById("addTask");
const taskList =
    document.getElementById("taskList");
addTask.addEventListener("click", function() {

    const task =
        taskInput.value.trim();


    if (task === "") {

        alert("Please enter a task.");

        return;
    }
    const listItem =
        document.createElement("li");



    const taskText =
        document.createElement("span");

    taskText.textContent = task;



    const deleteButton =
        document.createElement("button");

    deleteButton.textContent = "Delete";

    deleteButton.className = "delete-btn";


    deleteButton.addEventListener("click", function() {

        listItem.remove();

    });


    listItem.appendChild(taskText);

    listItem.appendChild(deleteButton);

    taskList.appendChild(listItem);
    taskInput.value = "";

});
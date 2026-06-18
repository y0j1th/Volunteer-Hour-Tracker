let totalHours = 0;

function addVolunteerHours(){

    let organization = document.getElementById("organization").value;

    let date = document.getElementById("date").value;

    let hours = parseFloat(document.getElementById("hours").value);

    let description = document.getElementById("description").value;

    if(
        organization === "" ||
        date === "" ||
        hours <= 0
    ){

        alert("Please fill out every field.");

        return;

    }

    let table = document.getElementById("tableBody");

    let row = table.insertRow();

    row.insertCell(0).innerHTML = organization;

    row.insertCell(1).innerHTML = date;

    row.insertCell(2).innerHTML = hours;

    row.insertCell(3).innerHTML = description;

    let editCell = row.insertCell(4);

    let deleteCell = row.insertCell(5);

    deleteCell.innerHTML = "<button class='delete-btn'>Delete</button>";

    let deleteButton = deleteCell.querySelector("button");

    deleteButton.onclick = function () {

    totalHours -= hours;
    document.getElementById("totalHours").innerHTML = totalHours;

    row.remove();

};

editCell.innerHTML = "<button class='edit-btn'>Edit</button>";

let editButton = editCell.querySelector("button");

editButton.onclick = function () {

    document.getElementById("organization").value = organization;
    document.getElementById("date").value = date;
    document.getElementById("hours").value = hours;
    document.getElementById("description").value = description;

    totalHours -= hours;
    document.getElementById("totalHours").innerHTML = totalHours;

    row.remove();

};

    totalHours += hours;

    document.getElementById("totalHours").innerHTML = totalHours;

    document.getElementById("organization").value = "";

    document.getElementById("date").value = "";

    document.getElementById("hours").value = "";

    document.getElementById("description").value = "";

};

let darkButton = document.getElementById("darkModeToggle");

darkButton.onclick = function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        darkButton.innerText = "Light Mode";
    } else {
        darkButton.innerText = "Dark Mode";
    }
};
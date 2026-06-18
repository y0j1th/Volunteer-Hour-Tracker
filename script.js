let entries = JSON.parse(localStorage.getItem("volunteerEntries")) || [];

function saveToLocalStorage() {
    localStorage.setItem("volunteerEntries", JSON.stringify(entries));
}

function renderTable() {
    let table = document.getElementById("tableBody");
    table.innerHTML = "";

    let totalHours = 0;

    entries.forEach((entry, index) => {
        let row = table.insertRow();

        row.insertCell(0).innerHTML = entry.organization;
        row.insertCell(1).innerHTML = entry.date;
        row.insertCell(2).innerHTML = entry.hours;
        row.insertCell(3).innerHTML = entry.description;

        totalHours += entry.hours;

        let editCell = row.insertCell(4);
        let deleteCell = row.insertCell(5);

        deleteCell.innerHTML = "<button class='delete-btn'>Delete</button>";
        deleteCell.querySelector("button").onclick = function () {
            entries.splice(index, 1);
            saveToLocalStorage();
            renderTable();
        };

        editCell.innerHTML = "<button class='edit-btn'>Edit</button>";
        editCell.querySelector("button").onclick = function () {
            document.getElementById("organization").value = entry.organization;
            document.getElementById("date").value = entry.date;
            document.getElementById("hours").value = entry.hours;
            document.getElementById("description").value = entry.description;

            entries.splice(index, 1);
            saveToLocalStorage();
            renderTable();
        };
    });

    document.getElementById("totalHours").innerText = totalHours;
}

function addVolunteerHours() {
    let organization = document.getElementById("organization").value;
    let date = document.getElementById("date").value;
    let hours = parseFloat(document.getElementById("hours").value);
    let description = document.getElementById("description").value;

    if (
        organization === "" ||
        date === "" ||
        isNaN(hours) ||
        hours <= 0
    ) {
        alert("Please fill out all fields correctly.");
        return;
    }

    entries.push({
        organization,
        date,
        hours,
        description
    });

    saveToLocalStorage();
    renderTable();

    document.getElementById("organization").value = "";
    document.getElementById("date").value = "";
    document.getElementById("hours").value = "";
    document.getElementById("description").value = "";
}

let darkButton = document.getElementById("darkModeToggle");

darkButton.onclick = function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        darkButton.innerText = "Light Mode";
    } else {
        darkButton.innerText = "Dark Mode";
    }
};

renderTable();

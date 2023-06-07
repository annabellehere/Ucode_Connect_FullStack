let superheroes = [
    { name: `Black Panther`, strength: 66, age: 53 },
    { name: `Captain America`, strength: 79, age: 137 },
    { name: `Captain Marvel`, strength: 97, age: 26 },
    { name: `Hulk`, strength: 80, age: 49 },
    { name: `Iron Man`, strength: 88, age: 48 },
    { name: `Spider-Man`, strength: 78, age: 16 },
    { name: `Thanos`, strength: 99, age: 1000 },
    { name: `Thor`, strength: 95, age: 1000 },
    { name: `Yon-Rogg`, strength: 73, age: 52 }
];


let table = document.createElement("table");
let thead = document.createElement("thead");
let tbody = document.createElement("tbody");
document.getElementById("placeholder").replaceWith(table);

let headers = ["Name", "Strength", "Age"];
let headerRow = document.createElement("tr");
headers.forEach(function (header) {
    let th = document.createElement("th");
    th.textContent = header;
    th.addEventListener("click", function () {
        sortTable(header);
    });
    headerRow.appendChild(th);
});
thead.appendChild(headerRow);
table.appendChild(thead);

superheroes.forEach(function (superhero) {
    let row = document.createElement("tr");
    let nameCell = document.createElement("td");
    nameCell.textContent = superhero.name;
    let strengthCell = document.createElement("td");
    strengthCell.textContent = superhero.strength;
    let ageCell = document.createElement("td");
    ageCell.textContent = superhero.age;

    row.appendChild(nameCell);
    row.appendChild(strengthCell);
    row.appendChild(ageCell);
    tbody.appendChild(row);
});
table.appendChild(tbody);

document.body.appendChild(table);

function sortTable(column) {
    let rows = Array.from(tbody.querySelectorAll("tr"));

    headers.forEach(function (header) {
        let th = thead.querySelector("th");
        th.classList.remove("active");
    });

    let sortOrder = "ASC";
    if (column === table.getAttribute("data-sort-column")) {
        if (table.getAttribute("data-sort-order") === "ASC") {
            sortOrder = "DESC";
        } else {
            sortOrder = "ASC";
        }
    }

    let currentHeader = thead.querySelector("th:nth-child(" + (headers.indexOf(column) + 1) + ")");
    currentHeader.classList.add("active");
    table.setAttribute("data-sort-column", column);
    table.setAttribute("data-sort-order", sortOrder);

    rows.sort(function (a, b) {
        let aValue = a.querySelector("td:nth-child(" + (headers.indexOf(column) + 1) + ")").textContent;
        let bValue = b.querySelector("td:nth-child(" + (headers.indexOf(column) + 1) + ")").textContent;

        if (column === "Strength" || column === "Age") {
            aValue = parseInt(aValue);
            bValue = parseInt(bValue);
        }
        
        if (column === "Name") {
            if (sortOrder === "ASC") {
                return aValue.localeCompare(bValue);
            } else {
                return bValue.localeCompare(aValue);
            }
        } else {
            if (sortOrder === "ASC") {
                return aValue - bValue;
            } else {
                return bValue - aValue;
            }
        }
    });

    rows.forEach(function (row) {
        tbody.appendChild(row);
    });

    let notification = document.getElementById("notification");
    let sortOrderText = sortOrder === "ASC" ? "ASC" : "DESC";
    let message = "Sorting by " + column + ", order: " + sortOrderText;
    notification.textContent = message;
}


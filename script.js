document.getElementById("getEmployeeDataBtn").addEventListener("click", fetchEmployeeData);

function fetchEmployeeData() {
    fetch("https://jsonplaceholder.typicode.com/users/")
        .then(response => response.json())
        .then(employees => {
            let output = "<h2>List of employees</h2>";
            output += "<ul>";
            employees.forEach(function (employees) {
                output += `
                <li>
                ${employees.name}
                </li>
                <li>
                    ${employees.username}
                </li>
                <li>
                    ${employees.company.name}
                </li>`;
                output += "</>";
                document.getElementById("response").innerHTML = output;

            })
        })
}
document.getElementById("getEmployeeDataBtn").addEventListener("click", fetchEmployeeData);

function fetchEmployeeData() {
    fetch("https://jsonplaceholder.typicode.com/users/")
        .then(response => response.json())
        .then(employees => {
            let output = "<h2>List of employees</h2>";
            output += "<ul>";
            employees.forEach(function (employees) {
                let table = document.getElementById("tableBody");
                let row = `<tr>
                    <td>${employees.name}</td>
                     <td> ${employees.username}</td>
                     <td>${employees.company.name}</td>
                    </tr>`
                table.innerHTML += row
                document.getElementById("response").innerHTML = output;

            })
        })
}
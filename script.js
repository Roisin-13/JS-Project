//--get listener for show
document.getElementById("getEmployeeDataBtn").addEventListener("click", fetchEmployeeData);
//--get listener for add
document.getElementById("addEmployeeForm").addEventListener("submit", addEmployee);



//======================show employee================//
function fetchEmployeeData() {
    fetch("https://jsonplaceholder.typicode.com/users/")
        .then(response => response.json())
        .then(employees => {
            let output = "";
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
//==========add employee===============//
function addEmployee(e) {
    e.preventDefault();
    let name = document.getElementById("name").value;
    let user = document.getElementById("userName").value;
    let company = document.getElementById("company").value;
    const myPost = {
        name: name,
        user: user,
        company: company
    }
    fetch("https://jsonplaceholder.typicode.com/users/", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(myPost)
    })
        .then((res) => res.json())
        .then(data => {
            let table = document.getElementById("tableBody");
            let outputADD = document.createElement("tr");
            let text = `<td>${data.name}</td>
                     <td> ${data.user}</td>
                     <td>${data.company}</td>`;
            outputADD.innerHTML += text;
            table.appendChild(outputADD);
            document.getElementById("name").value = "";
            document.getElementById("userName").value = "";
            document.getElementById("company").value = "";
        })
}


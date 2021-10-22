let employeeJSON =

    [
        {
            "ninumber": "ZS502747A", "fullname": "Chris P Bacon", "phone": "07659-831024", "address":
                "123 Elliot Hill", "department": "IT"
        },
        {
            "ninumber": "XS130502B", "fullname": "Miles A Head", "phone": "07666-616680", "address":
                "321 Haha Road", "department": "Sales"
        },
        {
            "ninumber": "MY034526D", "fullname": "Rick O'Shea", "phone": "07440-003065", "address":
                "64 Zoo Lane", "department": "HR"
        },
        {
            "ninumber": "AK311470", "fullname": "Robyn Banks", "phone": "07342-472921", "address":
                "324 Langton Ridgeway", "department": "HR"
        },
        {
            "ninumber": "LY682275B", "fullname": "Lorne Mowers", "phone": "07822-821023", "address":
                "234 Julian Market", "department": "IT"
        },
        {
            "ninumber": "BK227215B", "fullname": "Frank N Stein", "phone": "07661-522545", "address":
                "12 Springfield Grange", "department": "Sales"
        },
        {
            "ninumber": "XB363374C", "fullname": "Hedda Hare", "phone": "07563-758264", "address":
                "54 Blackbird Crescent", "department": "IT"
        },
        {
            "ninumber": "MY501327A", "fullname": "Upton O Goode", "phone": "07401-414740", "address":
                "2 St Margarets Drive", "department": "IT"
        },
        {
            "ninumber": "TT405395B", "fullname": "Marius Quick", "phone": "07870-297789", "address":
                "98 Earl Path", "department": "IT"
        },
        {
            "ninumber": "AZ764036A", "fullname": "Max E Mumm", "phone": "07872-642897", "address":
                "233 Lady Smith Avenue", "department": "IT"
        },
        {
            "ninumber": "ES73841C", "fullname": "Yul B Allwright", "phone": "07750-872412",
            "address": "45 Fountains Broadway", "department": "Sales"
        },
        {
            "ninumber": "WX465470A", "fullname": "Lori Driver", "phone": "07773-782275", "address":
                "65 Burlington Lodge", "department": "HR"
        },
        {
            "ninumber": "AK625470D", "fullname": "Shirley U Care", "phone": "07569-060117",
            "address": "97 Holderness Drive", "department": "HR"
        },
        {
            "ninumber": "SW098272B", "fullname": "Felix Cited", "phone": "07394-529507", "address":
                "32 Banningham Court", "department": "Sales"
        },
        {
            "ninumber": "OB043941D", "fullname": "Sandy Beech", "phone": "07958-301691", "address":
                "3 Third Mount", "department": "Sales"
        }
    ]


//--get listener for show
//document.getElementById("getEmployeeDataBtn").addEventListener("click", fetchEmployeeData);

//======================show employee================//
function fetchEmployeeData(array) {

    let table = document.getElementById("tableBody");

    for (let i = 0; i < array.length; i++) {
        let row = `<tr>
                    <td>${array[i].ninumber}</td>
                    <td>${array[i].fullname}</td>
                     <td> ${array[i].phone}</td>
                     <td>${array[i].address}</td>
                     <td>${array[i].department}</td>
                    </tr>`
        table.innerHTML += row;

    }

}
fetchEmployeeData(employeeJSON);

//--get listener for add
document.getElementById("addEmployeeForm").addEventListener("submit", addEmployee);
//==========add employee===============//
function addEmployee(e) {
    e.preventDefault();
    let ninumber = document.getElementById("ninumber").value;
    let fullname = document.getElementById("fullname").value;
    let address = document.getElementById("address").value;
    let phone = document.getElementById("phone").value;
    let department = document.getElementById("choseDep").value;
    const myPost = {
        ninumber: ninumber,
        fullname: fullname,
        address: address,
        phone: phone,
        department: department
    }
    employeeJSON.push(myPost);

    let table = document.getElementById("tableBody");
    table.innerHTML = "";
    fetchEmployeeData(employeeJSON);
    document.getElementById("ninumber").value = "";
    document.getElementById("fullname").value = "";
    document.getElementById("address").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("choseDep").value = "Department";

}

//--get listener for delete
document.getElementById("deleteEmployeeForm").addEventListener("submit", deleteEmployee);
//==========delete employee===============//
function deleteEmployee(e) {
    e.preventDefault();
    let inputID = document.getElementById("delID").value;

    let NI = `${inputID.toUpperCase()}`

    let findNI = employeeJSON.find(function (item, i) {
        if (item.ninumber === NI) {
            index = i;
            return i;
        }
    });
    console.log(index);
    console.log(employeeJSON);
    employeeJSON.splice(`${index}`, 1);
    let table = document.getElementById("tableBody");
    table.innerHTML = "";

    console.log(employeeJSON);

    fetchEmployeeData(employeeJSON);
    document.getElementById("delID").value = "";
}

//--get listener for update
document.getElementById("updateEmployeeForm").addEventListener("submit", updateEmployee);
//--get listener for edit
document.getElementById("editEmployeeForm").addEventListener("submit", editEmployee);
//==========update employee===============//
function updateEmployee(e) {
    e.preventDefault();
    let inputID = document.getElementById("updateID").value;

    let NI = `${inputID.toUpperCase()}`

    let findNI = employeeJSON.find(function (item, i) {
        if (item.ninumber === NI) {
            index = i;
            return i;
        }
    });

    console.log(index);
    console.log(employeeJSON[index]);
    document.getElementById("ninumber1").value = employeeJSON[index].ninumber;
    document.getElementById("fullname1").value = employeeJSON[index].fullname;
    document.getElementById("address1").value = employeeJSON[index].address;
    document.getElementById("phone1").value = employeeJSON[index].phone;
    document.getElementById("choseDep1").value = employeeJSON[index].department;

    employeeJSON.splice(`${index}`, 1);
    let table = document.getElementById("tableBody");
    table.innerHTML = "";

    console.log(employeeJSON);

    fetchEmployeeData(employeeJSON);

}
//---part of update (edit)
function editEmployee(e) {
    e.preventDefault();
    let ninumber1 = document.getElementById("ninumber1").value;
    let fullname1 = document.getElementById("fullname1").value;
    let address1 = document.getElementById("address1").value;
    let phone1 = document.getElementById("phone1").value;
    let department1 = document.getElementById("choseDep1").value;
    const myPostEdit = {
        ninumber: ninumber1,
        fullname: fullname1,
        address: address1,
        phone: phone1,
        department: department1
    }
    employeeJSON.push(myPostEdit);

    let table = document.getElementById("tableBody");
    table.innerHTML = "";
    fetchEmployeeData(employeeJSON);
    document.getElementById("ninumber1").value = "";
    document.getElementById("fullname1").value = "";
    document.getElementById("address1").value = "";
    document.getElementById("phone1").value = "";
    document.getElementById("choseDep1").value = "Department";

    document.getElementById("updateID").value = "";

}


//--get listener for filter
document.getElementById("filterDep").addEventListener("change", filterDep)
//==========filter employee===============//
function filterDep() {

    let dropdown, table, rows, cells, department, filter;
    dropdown = document.getElementById("filterDep");
    table = document.getElementById("tableBody");
    rows = table.getElementsByTagName("tr");
    filter = dropdown.value;

    for (let item of rows) {
        cells = item.getElementsByTagName("td");
        department = cells[4] || null;

        if (filter === "All" || !department || (filter === department.textContent)) {
            item.style.display = "";
        }
        else {
            item.style.display = "none";
        }
    }
}
//--get listener for filter
document.getElementById("inputName").addEventListener("keyup", filterName);
//==========filter employee===============//
function filterName() {

    let input, filter, table, tr, td, searchName;
    input = document.getElementById("inputName");
    filter = input.value.toUpperCase();
    table = document.getElementById("tableBody");
    tr = table.getElementsByTagName("tr");

    for (let i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];
        if (td) {
            searchName = td.textContent || td.innerText;
            if (searchName.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}
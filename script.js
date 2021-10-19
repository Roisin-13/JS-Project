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
//--get listener for add
document.getElementById("addEmployeeForm").addEventListener("submit", addEmployee);
//--get listener for delete
document.getElementById("deleteEmployeeForm").addEventListener("submit", deleteEmployee);

//======================show employee================//
function fetchEmployeeData(array) {
    //let output = "";
    let table = document.getElementById("tableBody");
    //let output = document.createElement("tr");
    // array.forEach(function (array) {
    //     let table = document.getElementById("tableBody");
    //     let row = `<tr>
    //     <td>${array.ninumber}</td>
    //                 <td>${array.fullname}</td>
    //                  <td> ${array.phone}</td>
    //                  <td>${array.address}</td>
    //                  <td>${array.department}</td>
    //                 </tr>`
    //     table.innerHTML += row
    //     document.getElementById("response").innerHTML = output;
    for (let i = 0; i < array.length; i++) {
        let row = `<tr>
                    <td>${array[i].ninumber}</td>
                    <td>${array[i].fullname}</td>
                     <td> ${array[i].phone}</td>
                     <td>${array[i].address}</td>
                     <td>${array[i].department}</td>
                    </tr>`
        table.innerHTML += row;
        //document.getElementById("response").innerHTML = output;
    }

}
fetchEmployeeData(employeeJSON);
//==========add employee===============//
function addEmployee(e) {
    e.preventDefault();
    let ninumber = document.getElementById("ninumber").value;
    let fullname = document.getElementById("fullname").value;
    let address = document.getElementById("address").value;
    let phone = document.getElementById("phone").value;
    let department = document.getElementById("department").value;
    const myPost = {
        ninumber: ninumber,
        fullname: fullname,
        address: address,
        phone: phone,
        department: department
    }
    console.log(myPost);
    employeeJSON.push(myPost);
    console.log(employeeJSON);
    // let table = document.getElementById("tableBody");
    // let outputADD = document.createElement("tr");
    // let text = `<tr>
    //                 <td>${myPost.ninumber}</td>
    //                 <td>${myPost.fullname}</td>
    //                  <td> ${myPost.phone}</td>
    //                  <td>${myPost.address}</td>
    //                  <td>${myPost.department}</td>
    //                 </tr >`
    // outputADD.innerHTML += text;
    // table.appendChild(outputADD);
    //let output = "";
    let table = document.getElementById("tableBody");
    table.innerHTML = "";
    fetchEmployeeData(employeeJSON);
    document.getElementById("ninumber").value = "";
    document.getElementById("fullname").value = "";
    document.getElementById("address").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("department").value = "";
}
//==========delete employee===============//

function deleteEmployee(e) {
    e.preventDefault();
    let inputID = document.getElementById("delID")
    let ID = parseInt(inputID);

    console.log(employeeJSON);

    employeeJSON.splice(`${ID}`, 1);
    let table = document.getElementById("tableBody");
    table.innerHTML = "";

    console.log(employeeJSON);

    fetchEmployeeData(employeeJSON);
    document.getElementById("delID").value = "";
}

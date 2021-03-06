$( document ).ready(onReady);

let employees = [];
let wage = 1;

function onReady() {
    $('#submitButton').on('click', addEmployee);
    $('#sumbitButton').on('click', showEmployees);
} // end onReady


function addEmployee() {
    let employeeObject = {
        first: $('#firstNameIn').val(),
        last: $('#lastNameIn').val(),
        id: $('#idIn').val(),
        title: $('#titleIn').val(),
        salary: $('#annuaSalaryIn').val()
    } // end employeeObject
    employees.push(employeeObject);

    $('#firstNameIn').val('');
    $('#lastNameIn').val('');
    $('#idIn').val('');
    $('#titleIn').val('');
    $('#annuaSalaryIn').val('');

    showEmployees();
    
   
    

} // end addEmployee

function showEmployees() {
    let el = $('#employeeOut');
    let count = $('#totaMonthly');
    el.empty();
    count.empty();
    for (i=0; i<employees.length; i++) {
        el.append(`<tr><td>${employees[i].first}</td> <td> ${employees[i].last}</td> <td> ${employees[i].id}</td> <td> ${employees[i].title}</td> <td> ${employees[i].salary}</td></tr>`);
        wage+=Number(employees[i].salary);
        count.append(wage);
    } // end for loop
} // end showEmployees



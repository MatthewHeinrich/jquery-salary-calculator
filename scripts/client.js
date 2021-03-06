$( document ).ready(onReady);

let employees = [];
// let newWage = 0;

function onReady() {
    $('#submitButton').on('click', addEmployee);
    $('#sumbitButton').on('click', showEmployees);
    $("#employeeOut").on('click', '#delete', function() {
        $(this).closest('tr').remove();
    });
   
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
    let wage = 0;
    el.empty();
    count.empty();
    for (i=0; i<employees.length; i++) {
         wage+=Number(employees[i].salary);
         if(wage > 20000) {
            var style = document.createElement('style');
                style.innerHTML = `
                #monthlyOut {
                background-color: red;
                }
                `;
                 document.head.appendChild(style);

         }
        // count.append(wage);
        el.append(`<tr><td>${employees[i].first}</td> <td class="tableIn"> ${employees[i].last}</td> <td class="tableIn"> ${employees[i].id}</td> <td class="tableIn"> ${employees[i].title}</td> <td class="tableIn"> ${employees[i].salary}</td><td class="tableIn"><button id="delete">Delete</button></td></tr>`);
        // wage = wage + Number(employees[i].salary);
        // count.append(wage);
    } // end for loop
    count.append(wage);
    // newWage.push(wage);
    
} // end showEmployees

// function addEmployeeWage() {
//     let count = $('#totaMonthly');
//     count.empty();
//     for (salary of employeess.salary) {
//         wage = wage + Number(employees.salary);
//         count.append(wage);
//     }
// }

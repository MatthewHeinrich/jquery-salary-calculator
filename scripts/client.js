$( document ).ready(onReady);

let employees = [];


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
        salary: Number($('#annuaSalaryIn').val())
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
    let salary = 0;
    el.empty();
    count.empty();
    for (i=0; i<employees.length; i++) {
        salary = employees[i].salary / 12;
         wage+=salary;
         if(wage > 20000) {
             // if wage > 20000, make  background red
            var style = document.createElement('style');
                style.innerHTML = `#monthlyText { background-color: red; }`;
                 document.head.appendChild(style);
          } // end if over 20000
        //   if($('#firstNameIn').val() || $('#lastNameIn').val() || $('#idIn').val() || $('#annuaSalaryIn').val() === '' ) {
        //     alert('Fill In All Boxes');
        //   }
        //   if ()
        
        el.append(`<tr><td class="tableIn">${employees[i].first}</td> 
                        <td class="tableIn"> ${employees[i].last}</td>
                        <td class="tableIn"> ${employees[i].id}</td>
                        <td class="tableIn"> ${employees[i].title}</td>
                        <td class="tableIn"> ${employees[i].salary}</td>
                        <td class="tableIn"><button id="delete">Delete</button></td></tr>`);
                    
    } // end for loop
    count.append(wage.toFixed(2));
} // end showEmployees

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
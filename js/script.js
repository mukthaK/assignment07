// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let form = document.forms[0];
let employees = document.querySelector('#employees');
// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let count = 0;
// GET THE OUTPUT TAG TO DISPLAY THE COUNT
let totalCount = document.querySelector('#empCount');

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();
    // GET THE VALUES FROM THE TEXT BOXES
    let id = document.querySelector('#id').value;
    let name = document.querySelector('#name').value;
    let extension = document.querySelector('#extension').value;
    let email = document.querySelector('#email').value;
    let department = document.querySelector('#department').value;
    
    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let row = employees.insertRow();
    let cellID = row.insertCell();
    let cellName = row.insertCell();
    let cellExtension = row.insertCell();
    let cellEmail = row.insertCell();
    let cellDepartment = row.insertCell();

     // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
     // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    cellID.appendChild(document.createTextNode(id));
    cellName.appendChild(document.createTextNode(name));
    cellExtension.appendChild(document.createTextNode(extension));
    cellEmail.appendChild(document.createTextNode(email));
    cellDepartment.appendChild(document.createTextNode(department));

    // CREATE THE DELETE BUTTON
    let deleteBtn = document.createElement('button');
    let textDelete = document.createTextNode('X');
    deleteBtn.appendChild(textDelete);
    deleteBtn.className = 'btn btn-danger btn-sm float-right';
    let cellDelete = row.insertCell();
    cellDelete.appendChild(deleteBtn);

    // RESET THE FORM
    form.reset();

    // SET FOCUS BACK TO THE ID TEXT BOX
    document.querySelector('#id').focus();

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    count++;
    // DISPLAY THE EMPLOYEE COUNT
    totalCount.innerHTML = count;
});

// DELETE EMPLOYEE
employees.addEventListener('click', (e) => {
    if(confirm(`Are you sure you want to delete?`)) {
        // GET THE PARENT <TR> OF THE DELETE BUTTON AND DELETE THE ROW
        employees.deleteRow(e.target.parentNode.parentNode.rowIndex);
        // DECREMENT THE COUNT
        count--;
        // DISPLAY THE EMPLOYEE COUNT
        totalCount.innerHTML = count;
    }
});
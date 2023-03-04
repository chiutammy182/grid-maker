// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    let table = document.getElementById("grid");  // finds the <table> element with id="grid"
    let row = table.insertRow(numRows);  // creates a new <tr> element 
    numRows++;   // increase the number of rows tracker variable
    if(numCols===0)     // new row is added along with new cell(column)
        numCols++;
    for(let i = 0;i<numCols;i++) // inserts a new cell(to create a row)
        row.insertCell(i);         // based on the numCols   
}

// Add a column
function addC() {
    let table = document.getElementById("grid");  // finds the <table> element with id="grid"
    if(numRows===0)  // if no row exists yet, create one and add a cell. Update numRows and numCols
    {
        let row = table.insertRow(numRows);
        row.insertCell(0);
        numRows++;
        numCols++
        return;
    }
    // else add a cell to each existing row(tr)
    let rows = document.querySelectorAll("tr");   // list of tr elements
    for(let i =0;i<rows.length;i++) 
        rows[i].insertCell(numCols);
    numCols++;
}

// Remove a row
function removeR() {
    alert("Clicked Remove Row"); // Replace this line with your code.
}

// Remove a column
function removeC() {
    alert("Clicked Remove Col"); // Replace this line with your code.
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}
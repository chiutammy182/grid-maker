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
    if(numRows===0)  // if no row exists yet, create one and add a cell. 
    {
        addR();
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
    if(numRows<=0)
        return;
    let table = document.getElementById("grid");  // finds the <table> element with id="grid"
    table.deleteRow(numRows-1);     // deletes the last row from the table
    numRows--;                      // update the numRows
    if(numRows===0)
        numCols=0;
}

// Remove a column
function removeC() {
    if(numCols<=0)      // no columns to remove
        return;
    let rows = document.querySelectorAll("tr");   // list of tr elements
    for(let i =0;i<rows.length;i++)   // delete the last cell in each row
        rows[i].deleteCell(numCols-1);
    numCols--;
    if(numCols===0)     // if all columns are removed(no cells left) then delete the tr elements
        for(let i =numRows-1;i>=0;i--)
            removeR();
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    cells = document.querySelectorAll("td");  // list of all td elements
    for(let i =0;i<cells.length;i++)
        if(cells[i].style.backgroundColor ==="")  // the background color is ""(when no color)
            cells[i].style.backgroundColor = colorSelected;
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}
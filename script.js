// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    let table = document.getElementById("grid");            // finds the <table> element with id="grid"
    let row = table.insertRow(numRows);                     // creates a new <tr> element 
    numRows++;                                              // increase the number of rows global variable
    if(numCols===0)                                   
        numCols++;                                          // new row is added along with new cell(column)
    for(let i = 0;i<numCols;i++)                      
    {
        row.insertCell(i);                                  // inserts a new cell to new <tr> element according to numCols variable
        row.lastElementChild.onclick = function(){          // if cell is clicked on then change to colorSelected(last element is the new cell created)
            this.style.backgroundColor = colorSelected;
        }
    }
}

// Add a column
function addC() {
    let table = document.getElementById("grid");            // finds the <table> element with id="grid"
    if(numRows===0)                                         // if no row exists yet, create one and add a cell. 
    {
        addR();                                             // call on addR() to do this
        return;
    }
    // else add a cell to each existing row(s)
    let rows = document.querySelectorAll("tr");             // list of tr elements
    for(let i =0;i<rows.length;i++) {
        rows[i].insertCell(numCols);                        // insert cell at the end of each row(index is numCols)
        rows[i].lastElementChild.onclick = function(){      // if cell is clicked on then change to colorSelected(newly inserted cell is the last element of each row)
            this.style.backgroundColor = colorSelected;
        }
    }
    numCols++;                                              // update global variable to track number of columns
}

// Remove a row
function removeR() {
    if(numRows<=0)                                         // nothing to remove
        return;
    let table = document.getElementById("grid");           // finds the <table> element with id="grid"
    table.deleteRow(numRows-1);                            // deletes the last row from the table
    numRows--;                                             // update the numRows
    if(numRows===0)                                        // no rows left means no cells so update numCols to zero
        numCols=0;
}

// Remove a column
function removeC() {
    if(numCols<=0)                                         // no columns to remove
        return;
    let rows = document.querySelectorAll("tr");            // list of <tr> elements
    for(let i =0;i<rows.length;i++)                        // delete the last cell in each row
        rows[i].deleteCell(numCols-1);
    numCols--;                                             // update the numCols
    if(numCols===0)                                        // if all columns are removed(no cells left) then delete the <tr> elements
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
    let cells = document.querySelectorAll("td");           // list of all td elements
    for(let i =0;i<cells.length;i++)
        if(cells[i].style.backgroundColor ==="")           // the background color is ""(when no color)
            cells[i].style.backgroundColor = colorSelected;
}

// Fill all cells
function fillAll(){
    let cells = document.querySelectorAll("td");           // list of all <td> elements
    for(let i =0;i<cells.length;i++)
        cells[i].style.backgroundColor = colorSelected;    // overwrite all cells' color
}

// Clear all cells
function clearAll(){
    let cells = document.querySelectorAll("td");          // list of all <td> elements
    for(let i =0;i<cells.length;i++)
        cells[i].style.backgroundColor = "";              // clear the color of all cells 
}



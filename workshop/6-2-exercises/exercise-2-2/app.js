// Exercise 2.2 - the Custom Grid
// ------------

// Use the grid code you wrote in 2.1

// Objectives
// Allow the user to create cells on the board based on values he/she inputs.
// - Ask the user the number of ROWS and COLUMNS
// - Use those values to generate a grid

// Hints
// - use the 'blur' event
// - one event listener per input

// If you need extra hints, see somebody... :)

// Setup element links:

const board = document.getElementById("board");
const columns = document.getElementById("columns-input");
const rows = document.getElementById("rows-input");

// We'll use these universal variables later to generate some cells:

let nRows = 0;
let nCols = 0;

// This lets us keep track of how many cells there are, so they can be easily deleted when their number is changed:
let nCells = 0;

// Setup basic board:

const BOARD_SIZE = 600;
board.style.display = "grid";
board.style.width = `${BOARD_SIZE}px`;
board.style.height = `${BOARD_SIZE}px`;

// Cell creator function:

function cellMaker() {
    // Takes the actual amount of rows times columns, or just the rows, or just the columns (depending on which is entered first)
    for (let x = 1; x <= ((nRows * nCols === 0) ? ((nCols === 0) ? nRows : nCols) : (nRows*nCols)); x++) {
        // Creates a cell for that amount of rows/columns:
        let cell = document.createElement("div");
        cell.id = `cell-${x}`;
        cell.classList.add("cell");
        cell.innerText = `Cell ${x}`;
        board.appendChild(cell);
    }
    nCells = ((nRows * nCols === 0) ? ((nRows === 0) ? nCols : nRows) : (nRows*nCols));
};

// Cell remover function: For when the variables change, to get rid of previously created cells:

function cellRemover() {
    for (let x = 1; x <= nCells; x++) {
        board.removeChild(document.getElementById(`cell-${x}`));
    }
};

// row Generator Function (more detailed comments follow in column maker function, which is essentially the same):

function rower(input) {
    // Convert input into number:
    let rows = Number(input.target.value);
    // Update global rows variable:
    nRows = rows;
    // Grid will be divided into rows based on the number of pixels they should each occupy:
    let rowSizeString = `${BOARD_SIZE/rows}px`;
    let cssString = [];
    for (let i = 0; i < rows; i++) {
        cssString.push(rowSizeString);
    }
    cssString = cssString.join(" ");
    board.style.gridTemplateRows = cssString;
    cellRemover();
    cellMaker();
};

// Column generation function:

function columner(input) {
    let cols = Number(input.target.value);
    // Update global rows variable:
    nCols = cols;
    // Grid will be divided into columns using the grid template columns method:
    // Start by establishing the width of each column:
    let colSizeString = `${BOARD_SIZE/cols}px`;
    // Then create an empty array that will become the text string for the css grid template:
    let cssString = [];
    // Then, for each column, add one instance of the 'x pixels' string to the css String array:
    for (let i = 0; i < cols; i++) {
        cssString.push(colSizeString);
    }
    // then make the css string into one big string, containing one 'x pixels' string per column, and use that to update the board style:
    cssString = cssString.join(" ");
    board.style.gridTemplateColumns = cssString;
    // Lastly, remove any cells from the previous setup,
    cellRemover();
    // Then, make some new ones!
    cellMaker();
};

rows.addEventListener("input", rower);
columns.addEventListener("input", columner);



// Row vs Column input selector:
// If nRows times nCols is zero, try nRows; if that's zero take nCols. Otherwise take nRows*nCols.



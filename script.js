// First function creates a grid of squares.
const container = document.getElementById("container");
const body = document.getElementById("body");

// original grid dimension
let starterRows = 16;
let starterColumns = 16;

// Function below creates the grid
function makeSquareGrid(rows, cols){
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    let gridCellsWidth = 1200 / rows;
    let gridCellsHeight = 1200 / cols;

    for(let cellSquare = 0; cellSquare < (rows * cols); cellSquare++){
        let cell = document.createElement("div");
        //cell.innerText = (cellSquare + 1);
        cell.style.height = gridCellsHeight + 'px';
        cell.style.width = gridCellsWidth + 'px';
        container.appendChild(cell).className = "grid-item";
    }
    let gridCells = document.querySelectorAll(".grid-item")
    gridCells.forEach(cell => cell.addEventListener('mouseenter', changeColor));

    
}

makeSquareGrid(starterRows, starterColumns);


// Functions below will change the color of the square hovered by the mouse on the grid.
function changeColor() {
    this.style.backgroundColor = getRandomColor();
}
//generate random color
function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

// DIV for reset button
const modificationDiv = document.createElement("div");
body.appendChild(modificationDiv);

//Button to modify grid
const modifyButton = document.createElement("button");
modifyButton.innerText = "Modify";
modifyButton.style.marginRight = 15 + 'px';
modifyButton.style.marginTop = 15 + 'px';
modificationDiv.appendChild(modifyButton);

modifyButton.addEventListener("click", updateGrid);

function updateGrid(){
    let result =prompt("Please enter new grid size (1-64).");
    // if ((Number.isInteger(result)) === false) result =prompt("Please enter new grid size (1-64).");
    if (result < 1 || result > 64) result =prompt("Please enter new grid size (1-64).");

    // Delete current grid to make a new one
    let gridCells = document.querySelectorAll(".grid-item");
    let gridIndex = 0;
    while(gridCells[gridIndex]){
        gridCells[gridIndex].parentNode.removeChild(gridCells[gridIndex]);
        gridIndex++;
    }

    let rows = result;
    let columns = result;
    makeSquareGrid(rows, columns);
}

// Button to reset color of all grid squares to white background
const resetButton = document.createElement("button");
resetButton.innerText = "Reset";
resetButton.style.marginTop = 15 + 'px';
modificationDiv.appendChild(resetButton);

resetButton.addEventListener("click", clearAllColors);

function clearAllColors(){
    //location.reload();
    let gridCells = document.querySelectorAll(".grid-item");
    let gridIndex = 0;
    while(gridCells[gridIndex]){
        if (gridCells[gridIndex].style.backgroundColor !== '#FFFFFF'){
            gridCells[gridIndex].style.backgroundColor = '#FFFFFF';
        }
        gridIndex++;
    }
}
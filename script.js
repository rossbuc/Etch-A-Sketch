function grdPrompt() {
    var gridSize = prompt("Please enter the number of grid squares you would like!");
    gridBuild(gridSize); 
}

function gridBuild(gridSize) {
    const grid = document.getElementById("container"); 
    document.getElementById("container").style.gridTemplateRows = `repeat(${gridSize}, 1fr)`; 
    document.getElementById("container").style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`; 

    for (let x = 0; x < gridSize; x++) {
        for (let y = 0; y < gridSize; y++) {
            var cell = document.createElement("div");
            cell.setAttribute("grid-column", x);
            cell.setAttribute("grid-row",  y);
            cell.setAttribute("class", "grid-cell");
            grid.appendChild(cell);
        }
    }

    grid.addEventListener('mouseover', (event) => {
        event.target.style.backgroundColor = "yellow"; 
    });
}




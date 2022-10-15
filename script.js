const grid = document.getElementById("container"); 

for (let x = 0; x < 17; x++) {
    for (let y = 0; y < 17; y++) {
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
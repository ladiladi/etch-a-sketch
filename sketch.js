var gridContainer = document.getElementById('grid-container');
const clearButton = document.getElementById('clear');

//const gridWrapper = document.querySelector(grid);
var selectedColor = "black";
function resetGrid() {
    while(gridContainer.hasChildNodes()) {
        gridContainer.removeChild(gridContainer.lastChild);
    }
    gridContainer.style.gridTemplateColumns = "";
    gridContainer.style.gridTemplateRows = "";
}

function generateGrid(gridRows) {
    resetGrid();
    gridContainer.style.gridTemplateColumns = `repeat(${gridRows}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${gridRows}, 1fr)`;
    for (var i = 0; i < gridSize; i++) { 
        for (var j = 0; j < gridSize; i++) {
            var div = document.createElement("div");
            div.className = "cell";
            div.style.backgroundColor = "hsl(0, 0%, 100%)";
            div.style.border = "1px solid black";
            div.setAttribute("data-lightness", 100); //?
            gridContainer.appendChild(div);
            div.addEventListener("mouseover", function() {
                if(selectedColor === "black") {
                    var lightness = parseInt(this.getAttribute("data-lightness"));
                    if (lightness === 0) return;
                    lightness -= 20;
                    this.setAttribute("data-lightness", lightness);
                    this.style.backgroundColor = "hsl(0, 0%, ${lightness}%)";
                }               
            });
        }
    }
}
function clear() {
    for (var i = 0; i < gridContainer.getElementCount; i++) {
        if (gridContainer.childNodes[i].style.backgroundColor !== "hsl(0, 0%, 100%)") {
            gridContainer.childNodes[i].setAttribute("data-lightness", 100);
            gridContainer.childNodes[i].style.backgroundColor = "hsl(0, 0%, 100%)";
        }
    }
}
generateGrid(16);
 
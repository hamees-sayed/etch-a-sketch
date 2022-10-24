let reset = document.querySelector(".reset");
let grid = document.querySelector(".grid");
let clear = document.querySelector(".clear");

reset.addEventListener('click', () => {
    resetGrid()
})


function resetGrid(){
        let number = prompt("What size would you like the grid to be? (1-100)");
        createGrid(number);
}


function createGrid(size){

    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    
    for (let i = 0; i < size*size; i++) {
        
        let square = document.createElement("div");
        square.style.backgroundColor = "white";
        grid.appendChild(square);

        square.addEventListener('mouseover', (event) => {
            square.style.backgroundColor = "black";
        })

        function clearGrid(){
            clear.addEventListener('click', (event) => {
                square.style.backgroundColor = "white"
            })
        }
        
        clearGrid();    
    }
}

createGrid(16);
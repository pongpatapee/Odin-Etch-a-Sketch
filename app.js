const defaultCanvSize = 16;
const defaultColor = "#333333";
const defaultMode = "color";

// let CANV_SIZE = document.getElementById('canv-size').value;
let CANV_SIZE = defaultCanvSize;
let currentColor = defaultColor;
let currentMode = defaultMode;
const canvas = document.querySelector('.canvas'); 
const colorInput = document.getElementById('color-input');
const colorModeBtn = document.getElementById('color-mode');
const rainbowModeBtn = document.getElementById('rainbow-mode');
const eraserModeBtn = document.getElementById('eraser-mode');
const clearBtn = document.getElementById('clear');
const canvSizeInput = document.getElementById('canv-size');
const canvSizeDisplay = document.getElementById('canv-size-display');
let cells;

function changeMode(mode){

}

function changeColor(newColor){
    currentColor = newColor;
}

function changeSize(size) {

}

function updateCanvSize(size){
    canvSizeDisplay.innerText = `${size} x ${size}`;
    CANV_SIZE = size;
    renderCanvas();
}

function clearCanv() {
    let cells = document.querySelectorAll('.canvas div div');
    cells.forEach(cell => cell.style.background = 'none');
}

function renderCanvas() {
    canvas.innerHTML = '';
    for(let i = 0; i < CANV_SIZE; i++){
        let row = document.createElement('div');
        for(let j = 0; j < CANV_SIZE; j++){
            let col = document.createElement('div');
            row.appendChild(col);
        }
        canvas.appendChild(row);
    }
    cells = document.querySelectorAll('.canvas div div');
    cells.forEach(cell => cell.addEventListener('mouseover', () => {
        cell.style.background = currentColor;
        // console.log(cell.style);
    }));
}


renderCanvas();

clearBtn.addEventListener('click', clearCanv);

const defaultCanvSize = 16;
const defaultColor = "#333333";
const defaultMode = "color";
const modes = ["color", "rainbow", "eraser"];
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
let currentActiveBtn = colorModeBtn;
currentActiveBtn.classList.add('active');

function getMode(modeid) {
    let mode = modeid.slice(0, modeid.length - 5);
    return mode;
}

function changeMode(modeid){
    let mode = getMode(modeid);
    currentMode = mode;
    currentActiveBtn.classList.remove('active');
    currentActiveBtn = document.getElementById(modeid);
    currentActiveBtn.classList.add('active');
}

function changeColor(newColor){
    currentColor = newColor;
}

function generateRandomColor() {
    let letters = '0123456789ABCDEF'
    let color = '#';
    for(let i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

function updateSizeDisplay(size) {
    canvSizeDisplay.innerText = `${size} x ${size}`;
}

function updateCanvSize(size){
    updateSizeDisplay(size);
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
        if(currentMode === "color"){
            cell.style.background = currentColor;
        }
        else if (currentMode === "rainbow") {
            cell.style.background = generateRandomColor();
        }
        else if (currentMode === "eraser") {
            cell.style.background = "none";
        }
    }));
}


renderCanvas();

colorModeBtn.addEventListener('click', (e)=>{
    changeMode(e.target.id);
});
rainbowModeBtn.addEventListener('click', (e)=>{
    changeMode(e.target.id);
});
eraserModeBtn.addEventListener('click', (e)=>{
    changeMode(e.target.id);
});
clearBtn.addEventListener('click', clearCanv);
canvSizeInput.addEventListener('mousemove', (e)=>{
    updateSizeDisplay(e.target.value);
});

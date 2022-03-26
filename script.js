const container = document.querySelector('#container');

// Grid Generator
function createGrid(size) {
    for (i = 0; i < size**2; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        let sizeSquare = (500/size)-2;
        square.style.height = `${sizeSquare}px`;
        square.style.width = `${sizeSquare}px`;
        square.style.border = '1px solid #6B6269';
        container.appendChild(square); 
    }
}

// Reset Grid

function resetGrid(size) {
    let squareCanvas = document.querySelectorAll(".square");
    squareCanvas.forEach(function(square) {
        square.remove();
    });
    createGrid(size);
 }


// Paint Color Functions
function paintBoxColor() {
    let squareCanvas = document.querySelectorAll('.square');
    squareCanvas.forEach(function(square) {
        square.addEventListener('mouseover', function() {
            let randomColor = getRandomColor();
            square.style.backgroundColor = randomColor;
        });
        
    });

}

function paintBoxBlack() {
    let squareCanvas = document.querySelectorAll('.square');
    squareCanvas.forEach(function(square) {
        square.addEventListener('mouseover', function() {
            square.style.backgroundColor = '#91878F';
        });
        
    });

}

function paintErase() {
    let squareCanvas = document.querySelectorAll('.square');
    squareCanvas.forEach(function(square) {
        square.addEventListener('mouseover', function() {
            square.style.backgroundColor = "rgba(255, 255, 255, 0.4)";
            square.style.border = '1px solid #6B6269';
        });
        
    });

}

// Random Color Generator
function getRandomColor() {
    let nOne = Math.floor(Math.random() * 256);
    let nTwo = Math.floor(Math.random()*256);
    let nThree = Math.floor(Math.random()*256);

    return `rgb(${nOne}, ${nTwo}, ${nThree})`;
}


// ***Buttons***

//reset button
const resetBtn = document.querySelector('.resetBtn');
resetBtn.addEventListener('click', function(){
    let userNumber = prompt("Enter a number for square by square grid proportions. Ex. enter 16 for a 16x16 grid. Max is 100.", "Enter Number");
    if(userNumber <= 100) {
        userNumber = Math.round(userNumber);
        resetGrid(userNumber);
    }
    else {
        alert(`${userNumber} is too high. Please enter a number less than 100.`);
    }

});

//color  buttons
const blackBtn = document.querySelector('.black');
blackBtn.addEventListener('click', paintBoxBlack);

const rainbowBtn = document.querySelector('.rainbow');
rainbowBtn.addEventListener('click', paintBoxColor);

const eraseBtn = document.querySelector('.erase');
eraseBtn.addEventListener('click', paintErase);


createGrid(16);





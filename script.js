const container = document.querySelector('#container');

const square = document.createElement('div');
square.classList.add('square');
square.textContent = ' ';
square.setAttribute('style', 'background: white; border: 1px solid black; width: 50px; height: 50px');


container.appendChild(square);



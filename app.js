const board = document.querySelector('#board');
const colors = ['#fffed5', '#ffe9c7', '#feb475', '#e97e3a', '#878c75', '#85cfb8', '#009685', '#00695d'];
const SQUARES_NUMBER = 4000;

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  square.addEventListener('mouseover', setColor);
  square.addEventListener('mouseleave', removeColor);
  board.append(square);
};

function setColor (event) {
  const element = event.target;
  const color = getRandomeColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
};

function removeColor (event) {
  const element = event.target;
  element.style.backgroundColor = '#1d1d1d';
  element.style.boxShadow = `0 0 2px #000`;
};

function getRandomeColor() {
  return colors[Math.floor(Math.random() * colors.length)];
};
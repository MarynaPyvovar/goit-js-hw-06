function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const mainDivEl = document.querySelector('#boxes');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const inputEl = document.querySelector('#controls input');

createBtn.addEventListener('click', () => {
  createBoxes(inputEl.value);
});

destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  let boxSize = 30;
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');

    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;

    mainDivEl.append(box);
    boxSize += 10;
  }
}


function destroyBoxes() {
  mainDivEl.innerHTML = '';
  inputEl.value = '';
}
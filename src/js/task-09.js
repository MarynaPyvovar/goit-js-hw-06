function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  changeColorBtn: document.querySelector('.change-color'),
  textColorEl: document.querySelector('.color'),
  bodyEl: document.body,
}

refs.changeColorBtn.addEventListener('click', () => {
  const color = getRandomHexColor();
  refs.bodyEl.style.backgroundColor = color;
  refs.textColorEl.textContent = color;
})
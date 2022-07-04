const nameInput = document.querySelector('input#name-input');
const nameOutput = document.querySelector('span#name-output');

nameInput.addEventListener('input', () => {
    nameOutput.textContent = nameInput.value;
    if (nameInput.value === '') {
        nameOutput.textContent = 'Anonymous';
    };
});

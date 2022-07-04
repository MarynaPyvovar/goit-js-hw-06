const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', () => {

    if (inputEl.value.length === Number(inputEl.dataset.length)) {
        inputEl.classList.value = 'valid';
    } else {
        inputEl.classList.value = 'invalid';
    }
})

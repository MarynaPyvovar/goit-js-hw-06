const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', (event) => {
    event.preventDefault();

    const { elements: { email, password } } = event.currentTarget;
    
    if (email.value === '' || password.value === '') {
        alert('Всі поля повинні бути заповнені!');
        return
    };

    const user = {
        email: email.value,
        password: password.value,
    };

    console.log(user);

    formEl.reset()
})

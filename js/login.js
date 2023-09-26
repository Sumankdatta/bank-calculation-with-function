document.getElementById('btn-submit').addEventListener('click', function () {
    const emailField = document.getElementById('email')
    const email = emailField.value;

    const passwordField = document.getElementById('password')
    const password = passwordField.value;

    if (email === 'suman@gmail.com' && password === '11111') {
        window.location.href = 'bank.html'
    }
    else {
        alert('You are not valid user')
    }
})
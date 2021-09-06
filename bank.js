document.getElementById('login-submit').addEventListener('click', function () {
    // get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    // check emali and password
    if (userEmail == 'afifamasumem@gmail.com' && userPassword == 'sume1990') {
        window.location.href = 'banking.html';
    }
})


//step1: add eventlistner in submit button

document.getElementById('btn-submit').addEventListener('click', function() {
    
    //step2: get the input value of email and password input field
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // console.log(userEmail)

    // getting password field value
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    // console.log(userPassword)

    //verify email and password on the client side
    if (userEmail === 'sontan@bap.com' && userPassword === 'secret') {
        window.location.href = 'bank.html'
    }
    else {
        alert('you are not my son!')
    }
})
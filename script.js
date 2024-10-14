const username = document.getElementById('username');
const password = document.getElementById('Pass');
const formElement = document.getElementById('form-handling');
const errorMessage = document.getElementById('error-message');

formElement.addEventListener('submit', function(e) {
    
    e.preventDefault();

    const usernameValue = username.value;
    const passwordValue = password.value;

    if (usernameValue.length==0 || passwordValue.length==0){
        errorMessage.textContent='please fill all the required field';
    }
    else if(usernameValue.length >= 5 && passwordValue.length >= 8) {
        errorMessage.textContent = ''; 
        console.log('Form is valid. Submitting form...');

    } 
    else {
        errorMessage.textContent = 'Username must be at least 5 characters and password at least 8 characters long.';
    }
});

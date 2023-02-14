document.getElementById('submit-btn').addEventListener('click', function(){
    const userEmail = document.getElementById('user-email');
    const email = userEmail.value;

    const userPassword = document.getElementById('user-password');
    const password = userPassword.value;

    if(email === 'amarbank@gmail.com' && password === '112233'){
        window.location.href = 'bank.html'
    }
    else{
        alert('Please submit write username and password');
    }
});

document.getElementById('btn-submit').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const email = emailField.value; 
    
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    
    if(email === 'mehedi92@gmail.com' && password === 'secret92'){
        window.location.href = 'bank.html'
    }
    else{
        alert('tui password vule gesos!! toke teijjo sontan ghoshona korlam')
    }
})
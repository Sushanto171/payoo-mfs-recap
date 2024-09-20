document.getElementById('login-button').addEventListener('click', function(event){
    event.preventDefault();
    const phoneNumber = getElementByIdValue('input-phone');
    const loginPassword = getElementByIdValue('login-password');
    if(phoneNumber === 5 && loginPassword === 1234){
        window.location.href = './home.html';
    }
    else{
        alert('Wrong Phone Number or Password !')
    }
    getElementByIdInnerDelete('input-phone');
    getElementByIdInnerDelete('login-password');
})
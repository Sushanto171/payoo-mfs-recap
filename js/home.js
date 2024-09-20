const inputAmount =getElementByIdValue('input-amount');
document.getElementById('add-money').addEventListener('click', function(){
document.getElementById('form').classList.remove('hidden')
    document.getElementById('action-button').innerText = 'Add Money';
    document.getElementById('input-amount').setAttribute('placeholder', 'Add Money')
})
document.getElementById('cash-out').addEventListener('click', function(){
    document.getElementById('form').classList.remove('hidden')
    document.getElementById('action-button').innerText = 'Cash Out';
    document.getElementById('input-amount').setAttribute('placeholder', 'Cash out amount')
})

const actionButton = document.getElementById('action-button')
actionButton.addEventListener("click", function(event){
    event.preventDefault();
    const inputAmount =getElementByIdValue('input-amount');
    const accountBalance = getElementByIdInnerText('account-balance');
    const password =getElementByIdValue('password');
    if(inputAmount <= 0 || isNaN(inputAmount) ){
        alert('Please enter a valid amount.');
        getElementByIdInnerDelete('password');
        getElementByIdInnerDelete( 'input-amount');
        return;
    };
    if(actionButton.innerText === 'Add Money' && password ===1234){
        const updateBalance = accountBalance + inputAmount;
        document.getElementById('account-balance').innerText = updateBalance;
    }
    else if(actionButton.innerText === 'Cash Out' && password ===1234){
        if(accountBalance < inputAmount){
            alert('Account Balance Low!');
            getElementByIdInnerDelete('password');
            getElementByIdInnerDelete( 'input-amount');
            return;
        }
        const updateBalance = accountBalance - inputAmount;
        document.getElementById('account-balance').innerText = updateBalance;
    }
    else{
        alert('Please try again.')
    }
    getElementByIdInnerDelete('password');
    getElementByIdInnerDelete( 'input-amount');
})
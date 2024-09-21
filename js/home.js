let num =0;
const actionButton = document.getElementById('action-button')
actionButton.addEventListener("click", function(event){
    num += 1
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
        showTransaction(inputAmount, updateBalance,'Add Money');
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
        showTransaction(inputAmount, updateBalance,'Cash Out');
    }
    else{
        alert('Please try again.')
    }
    getElementByIdInnerDelete('password');
    getElementByIdInnerDelete( 'input-amount');
})
// get bonus
document.getElementById('get-bonus-button').addEventListener('click', function(event){
    event.preventDefault();
    console.log('get -bonus')
})
document.getElementById('pay-bill-button').addEventListener('click', function(event){
    event.preventDefault();
    console.log('pay -bonus')
})
document.getElementById('send-money-button').addEventListener('click', function(event){
    event.preventDefault();
    console.log('transfer-bonus')
})


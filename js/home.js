
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
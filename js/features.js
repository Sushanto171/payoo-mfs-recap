
// add money features
document.getElementById('add-money').addEventListener('click', function () {
    showSectionById('form');
    document.getElementById('action-button').innerText = 'Add Money';
    document.getElementById('input-amount').setAttribute('placeholder', 'Add Money')
})
// cash out features
document.getElementById('cash-out').addEventListener('click', function () {
    showSectionById('form');
    document.getElementById('action-button').innerText = 'Cash Out';
    document.getElementById('input-amount').setAttribute('placeholder', 'Cash out amount')

})
// transaction features
document.getElementById('transaction-button').addEventListener('click', function () {
   showSectionById('transaction-form');
})
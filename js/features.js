
// add money features
document.getElementById('add-money').addEventListener('click', function () {
    showSectionById('form');
    document.getElementById('action-button').innerText = 'Add Money';
    document.getElementById('input-amount').setAttribute('placeholder', 'Add Money');
    showBgById('add-money');
})
// cash out features
document.getElementById('cash-out').addEventListener('click', function () {
    showSectionById('form');
    document.getElementById('action-button').innerText = 'Cash Out';
    document.getElementById('input-amount').setAttribute('placeholder', 'Cash out amount');
    showBgById('cash-out');
})
// transaction features
document.getElementById('transaction-button').addEventListener('click', function () {
   showSectionById('transaction-form');
   showBgById('transaction-button');
})
// pay-bill
document.getElementById('get-bonus').addEventListener('click', function () {
   showSectionById('get-bonus-form');
   showBgById('get-bonus');
})
// pay-bill
document.getElementById('pay-bill').addEventListener('click', function () {
   showSectionById('pay-bill-form');
   showBgById('pay-bill');
})
// transfer-money
document.getElementById('transfer-money').addEventListener('click', function () {
   showSectionById('transfer-money-form');
   showBgById('transfer-money');
})

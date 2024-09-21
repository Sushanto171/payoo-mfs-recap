document.getElementById('theme').addEventListener('click', function () {
    const htmlElement = document.getElementById('html');
    if (htmlElement.getAttribute('data-theme') === 'light') {
        htmlElement.removeAttribute('data-theme')
        document.getElementById('theme').style.backgroundColor = 'white'
    }
    else {
        htmlElement.setAttribute('data-theme', 'light');
        document.getElementById('theme').style.backgroundColor = 'gray'
    }
});

function getElementByIdValue(id) {
    const getValue = document.getElementById(id).value;
    const getValueNumber = parseFloat(getValue);
    return getValueNumber;
}
function getElementByIdInnerText(id) {
    const getInnerText = document.getElementById(id).innerText;
    const getInnerTextNumber = parseFloat(getInnerText);
    return getInnerTextNumber;
}
function getElementByIdInnerDelete(id) {
    return document.getElementById(id).value = '';
}

function showSectionById(id) {
    // hide all the sections
    document.getElementById('form').classList.add('hidden');
    document.getElementById('transaction-form').classList.add('hidden');
    document.getElementById('transaction-form').classList.add('hidden');
    document.getElementById('get-bonus-form').classList.add('hidden');
    document.getElementById('pay-bill-form').classList.add('hidden');
    document.getElementById('transfer-money-form').classList.add('hidden');
    // Show the section with the  provide id as parameter
    document.getElementById(id).classList.remove('hidden');
}
function showTransaction(Amount, NewBalance, condition) {
    const transactionId = Math.random();
    const div = document.createElement('div');
    div.setAttribute('class', 'text-left pl-4');
    const br = document.createElement('br');
    const currentDate = new Date();
    if (condition === 'Add Money') {
        div.innerHTML = `
        <p class=" font-semibold">${num}.</p>
        <p>Added: ${Amount} $. New Balance ${NewBalance} $.</p>
        <p>Date: ${currentDate.toLocaleDateString()} | ${currentDate.toLocaleTimeString()}</p>
        <p>Transaction ID: #${transactionId}</p>`;
        document.getElementById('transaction-container').append(br, div);
   
        return;
    }
    else if (condition === 'Cash Out') {
        div.innerHTML = `
        <p class=" font-semibold">${num}.</p>
        <p>Cash Out: ${Amount} $. New Balance ${NewBalance} $.</p>
        <p>Date: ${currentDate.toLocaleDateString()} | ${currentDate.toLocaleTimeString()}</p>
        <p>Transaction ID: #${transactionId}</p>`;
        document.getElementById('transaction-container').append(br, div);
        return;
    }
}
// password
function showPassword(id) {

    const passwordField = document.getElementById(id);
    if (passwordField.getAttribute('type') === 'text') {
        passwordField.setAttribute('type', 'password');
        const btns = document.getElementsByClassName('show-pass-btn');
        for (const btn of btns) {
         btn.innerHTML = `<i class="fa-regular fa-eye"></i>`;
        }
    }
    else if (passwordField.getAttribute('type') === 'password') {
        passwordField.setAttribute('type', 'text');
        const btns = document.getElementsByClassName('show-pass-btn');
        for (const btn of btns) {
            btn.innerHTML = `<i class="fa-regular fa-eye-slash"></i>`;
        }
    }
}
const btns = document.getElementsByClassName('show-pass-btn');
for (const btn of btns) {
    btn.addEventListener('click', function (event) {
        event.preventDefault();
        showPassword('password');
    });
}


function showBgById(id) {
    document.getElementById('cash-out').classList.remove('border-blue-400', 'text-blue-400', 'bg-blue-50');
    document.getElementById('add-money').classList.remove('border-blue-400', 'text-blue-400', 'bg-blue-50');
    document.getElementById('transaction-button').classList.remove('border-blue-400', 'text-blue-400', 'bg-blue-50');
    document.getElementById('get-bonus').classList.remove('border-blue-400', 'text-blue-400', 'bg-blue-50');
    document.getElementById('pay-bill').classList.remove('border-blue-400', 'text-blue-400', 'bg-blue-50');
    document.getElementById('transfer-money').classList.remove('border-blue-400', 'text-blue-400', 'bg-blue-50');
    document.getElementById(id).classList.add('border-blue-400', 'text-blue-400', 'bg-blue-50');
}
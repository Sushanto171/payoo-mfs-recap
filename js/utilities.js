document.getElementById('theme').addEventListener('click', function(){
    const htmlElement = document.getElementById('html');
    if(htmlElement.getAttribute('data-theme')=== 'light'){
        htmlElement.removeAttribute('data-theme')
        document.getElementById('theme').style.backgroundColor = 'white'
    }
    else{
        htmlElement.setAttribute('data-theme', 'light');
        document.getElementById('theme').style.backgroundColor = 'gray'
    }
});

function getElementByIdValue(id){
    const getValue= document.getElementById(id).value;
    const getValueNumber = parseFloat(getValue);
    return getValueNumber;
}
function getElementByIdInnerText(id){
    const getInnerText= document.getElementById(id).innerText;
    const getInnerTextNumber = parseFloat(getInnerText);
    return getInnerTextNumber;
}
function getElementByIdInnerDelete(id){
    return  document.getElementById(id).value = '';
}

function showSectionById(id){
    // hide all the sections
    document.getElementById('form').classList.add('hidden');
    document.getElementById('transaction-form').classList.add('hidden');
    // Show the section with the  provide id as parameter
    document.getElementById(id).classList.remove('hidden');
}

function showTransaction(Amount, NewBalance, condition){
    const transactionId = Math.random();
    const p = document.createElement('p');
    const br = document.createElement('br');
    const currentDate = new Date();
    if(condition ==='Add Money'){
        p.innerText =`Added: ${Amount} Tk. New Balance ${NewBalance} Tk.
         Date: ${currentDate.getDate()}-${currentDate.getDay()}-${currentDate.getFullYear()}.(${currentDate.getSeconds()}sec.-${currentDate.getMinutes()}min.-${currentDate.getHours()}hr.)
         Transaction ID: #${transactionId}`;
        document.getElementById('transaction-container').append( br, p);
        return;
    }
    else if(condition ==='Cash Out'){
        p.innerText =`Cash Out: ${Amount} Tk. New Balance ${NewBalance} Tk.
        Date: ${currentDate.getDate()}-${currentDate.getDay()}-${currentDate.getFullYear()}.(${currentDate.getSeconds()}sec.-${currentDate.getMinutes()}min.-${currentDate.getHours()}hr.)
        Transaction ID: #${transactionId}`;
       document.getElementById('transaction-container').append(br, p);
       return;
    }
}
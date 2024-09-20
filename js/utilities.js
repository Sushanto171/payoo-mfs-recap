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
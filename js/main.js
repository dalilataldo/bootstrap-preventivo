//elementi della pagina

const form = document.getElementById('form');
const userSelect = document.getElementById('userselect');
const userDiscountCode = document.getElementById('usercode');
const resultInteger = document.getElementById('intero');
const resultDecimal = document.getElementById('decimale');

//valori di partenza

let projectHours = 10;
const discount = ['YHDNU32', 'JANJC63', 'PWKCN25', 'SJDPO96', 'POCIE24'];
const selectOptions = ['Backend Development', 'Frontend Development', 'Project Analysis']

//creo un ciclo for per inserire le options nella select

for (let i = 0; i < selectOptions.length; i++) {
    let option = document.createElement('option');
    option.value = selectOptions[i];
    option.innerHTML = selectOptions[i];
    userSelect.appendChild(option)
}

//funzione codice sconto
//se codice promozionale valido --> 25% di sconto
//altrimenti --> allert: codice non valido

function calculateDiscount(full_price) {

    const userDiscountCode = document.getElementById('usercode').value;

    if (discount.includes(userDiscountCode)) {

        return full_price * 0.75;

    } else if (userDiscountCode !== "") {

        alert('Non hai inserito un codice sconto valido');

    }
    return full_price;
}

//funzione splitta il prezzo finale tra cifre intere e cifre decimali
//stampa in pagina i due valori

function splitResult(num) {

    let result = num.toFixed(2).toString();
    let numInteger = result.split('.')[0];
    let numDecimal = result.split('.')[1];
    resultInteger.innerText = `€${numInteger},`;
    resultDecimal.innerText = `${numDecimal}`;

    return 'splitted';

}

//esecuzione del problema:
//blocco refresh del form
//il prezzo orario è:
//per sviluppo backend --> 20.50€
//per sviluppo frontend --> 15.30€
//per analisi progettuale --> 33.60€
//stampa in pagina il prezzo finale

form.addEventListener('submit', function (event) {
    event.preventDefault();

    //passo il valore della select alla funzione

    const userSelect = document.getElementById('userselect');
    let selectIndex = userSelect.selectedIndex;
    let selectedValue = userSelect.options[selectIndex];
    let selectValue = selectedValue.value;

    //eseguo 

    let price = 0

    if (selectValue === 'Backend Development') {
        price = projectHours * 20.50;
    }

    else if (selectValue === 'Frontend Development') {
        price = projectHours * 15.30;
    }

    else if (selectValue === 'Project Analysis') {
        price = projectHours * 33.60;
    }

    // applico funzioni
    let finalPrice = calculateDiscount(price);
    splitResult(finalPrice);

});

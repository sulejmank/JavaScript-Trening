var globalniOperator = "";


function addElement(element) {
    var display = document.getElementById('calculator');
    display.value += element;
}   

function addOperator(operator) {
    if (globalniOperator) {
        return;
    }

    var display = document.getElementById('calculator');
    display.value += operator;

    globalniOperator = operator;
}

function clearDisplay() {
    var display = document.getElementById('calculator');
    display.value = '';
}

function calculate() {
    var display = document.getElementById('calculator');
    var vrednosti = display.value.split(globalniOperator);

    var prvaVrednost = vrednosti[0];
    var drugaVrednost = vrednosti[1];

    switch(globalniOperator) {
        case "+":
            display.value = add(prvaVrednost, drugaVrednost);
            break;
        case '-':
            display.value = substract(prvaVrednost, drugaVrednost);
            break;
        case '*':
            display.value = multiply(prvaVrednost, drugaVrednost);
            break;
        case '/':
            display.value = divide(prvaVrednost, drugaVrednost);
            break;
    }
    globalniOperator = "";
}

function koren() {
    let display = document.getElementById('calculator');
    let broj = parseFloat(display.value);
    let korenBroja = Math.sqrt(broj);

    display.value = korenBroja.toFixed(3);
}

function kvadrat() {
    let display = document.getElementById('calculator');
    let broj = parseFloat(display.value);

    let kvadratBroja = Math.pow(broj, 2); // broj ** 2
    display.value = kvadratBroja;
}

function add(a, b) {
    if(!a || !b) {
        return;
    }

    let firstValue = parseFloat(a);
    let secondValue = parseFloat(b);

    return firstValue + secondValue;
}

function deleteLast() {
    let display = document.getElementById('calculator');
    let novaVrednost = display.value.substring(0, display.value.length - 1);
    
    display.value = novaVrednost;
}

function substract(a, b) {
    let firstValue = parseFloat(a);
    let secondValue = parseFloat(b);

    return firstValue - secondValue;
}

function multiply(a, b) {
    let firstValue = parseFloat(a);
    let secondValue = parseFloat(b);

    return firstValue * secondValue;
}

function divide(a, b) {
    let firstValue = parseFloat(a);
    let secondValue = parseFloat(b);
    let result = 0;
    try {
        if (secondValue === 0) {
            throw "Deljenje sa nulom"
        }
        result = firstValue / secondValue;
    } catch(error) {
        console.log(error)
    }
    
    return result;
}
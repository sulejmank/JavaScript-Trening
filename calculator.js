var globalniOperator = "";

function addElement(element) {
    var display = document.getElementById('calculator');
    display.value += element;
}

function addOperator(operator) {
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
            display.value = parseFloat(prvaVrednost) - parseFloat(drugaVrednost);
            break;
    }
}

function add(a, b) {
    let firstValue = parseFloat(a);
    let secondValue = parseFloat(b);

    return firstValue + secondValue;
}

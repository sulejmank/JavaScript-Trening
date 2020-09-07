function pitajIme() {
   // Ova funkcija ispisuje ime
   let ime = window.prompt('Unesite svoje ime?');
   document.getElementById('vezba').innerHTML = `Cao ${ime}`;
}


function traziBroj() {
    let broj = window.prompt('Unesi broj');
    let ostatakDeljenje = broj%3;

    document.getElementById('vezba').innerHTML = ostatakDeljenje;
   
}

var brojac = 0;
function inkrement() {
    brojac++;
    document.getElementById('vezba').innerHTML = brojac;
}


var x = 10;
x += 5;

var y = 10;
y = 5;
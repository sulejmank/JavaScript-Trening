function naKlik() {
    document.getElementById("vezba").innerHTML = pozdrav();
}

function pozdrav() {
    return "cao";
}

function ispis() {
    document.write(pozdrav());
}

function alertMe() {
    window.alert(pozdrav());
}

function prihvati() {
    let potvrda = window.confirm("Hocete obavestenja?");

    if (potvrda) {
        alertMe();
    }
}

function saberiDvaiDva() {
    
}
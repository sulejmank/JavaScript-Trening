const users = [
    { username: 'dzoni', password: 'password' },
    { username: 'dzemil', password: 'pass' }
];


function saberi(a, b) {
    return a + b;
}


let saber = a => a + b;

saber(2, 3);
saberi(2, 3);


users

function login() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    let ulogovoaniKorisinik;

    users.forEach((user) => {
        if (username === user.username && password === user.password) {
            ulogovoaniKorisinik = user;
            window.location.href = "index.html";
            return;
        }
    });



    document.getElementById('poruka').innerHTML = "Pogresni podaci!";
}


// napraviti niz objekata ljudi (ime, prezime, godine)
// izbaciti sa pop funckijom lika 
// dodati sa push novog lika
// uraditi isto sa shift i unshift
// sa foreach svakom dodati po 5 godina s


const users = [
    { ime: 'dzoni', prezime: 'nekic', boje: ['crna', 'bela'], datumRodjenja: new Date()},
    { ime: 'dzemil', prezime: 'pass', boje: ['lila', 'zuta']},
    { ime: 'dzeki', prezime: 'pezic', boje: ['crna', 'siva']}
];

// proci kroz nas niz korisnika i da im odredite godine i jesu punoletnih 
// napraviti niz sa svim datuima rodjenja korisnika 
// ako su punoletni dodati im 5 godina na datum a ako nisu koliko im nedostaje do punoletstva  

const dzoni = users[0];

console.log(users.includes(dzoni))


// var koriniciSaCrnom = users.filter(user => {
//     let index = user.boje.find(boja => boja === 'crna');

//     console.log(index)
//     if(index === undefined) {
//         return false;
//     } else {
//         return true;
//     }
// })

function zadnjiElement() {
    return users.splice(users.length - 1)[0] // niz[niz.length - 1]
}

const zadnji = zadnjiElement();

console.log(zadnji)

const users = [
    { ime: 'dzoni', prezime: 'nekic', godine: 22, boje: ['crna', 'bela']},
    { ime: 'dzemil', prezime: 'pass', godine: 44, boje: ['lila', 'zuta']},
    { ime: 'dzeki', prezime: 'pezic', godine: 22, boje: ['crna', 'siva']}
];

const dzoni = users[0];

console.log(users.includes(dzoni))


// var koriniciSaCrnom = users.filter(user => {
//     let index = user.boje.find(boja => boja === 'crna');

//     console.log(index)
//     if(index === undefined) {
//         return false;
//     } else {
//         return true;
//     }
// })

function zadnjiElement() {
    return users.splice(users.length - 1)[0] // niz[niz.length - 1]
}

const zadnji = zadnjiElement();
function saberiGodino() {
    let zbir = 0;
    users.forEach(x => zbir += x.godine)
    return zbir;
}

function brojPunoletnih() {
    return users.filter(x => x.godine > 18);
}

console.log(brojPunoletnih())


var danas = new Date();

var dan = danas.getDay();
switch(dan) {
    case 0: 
    case 1: 
    case 2: 
        console.log('sreda');
}

var user = { ime: 'dzoni', prezime: 'nekic', godine: 22, boje: ['crna', 'bela']};

console.log(user['ime'])
console.log(user.ime)


const users = [
    { ime: 'dzoni', prezime: 'nekic', godine: 22, boje: ['crna', 'bela']},
    { ime: 'dzemil', prezime: 'pass', godine: 44, boje: ['lila', 'zuta']},
    { ime: 'dzeki', prezime: 'pezic', godine: 22, boje: ['crna', 'siva']}
];

let x;

for (x in user) {
    console.log(user[x])
}

for (x of users) {
    for (u in x) {
        console.log(x[u])
    }
}


for (var user of users) {
    for (var prop in user) {
        if (prop === 'boje') {
            for (var boja of user[prop]) {
                if(boja === 'lila') {
                    console.log(user)
                }
            }
        }
    }
}


for (var user of users) {
    if (user.ime === 'dzoni') {
        break;
    }
}


for (var user of users) {
    if (user.ime === 'dzoni') {
        continue;
    }
}

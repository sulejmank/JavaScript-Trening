let users: any[] | User[] = [];
let brojIliString: number | string;
let niz: Array<User>;

interface Backpack<Type> {
  add: (obj: Type) => void;
  get: () => Type;
}


let backs: Backpack<number>

brojIliString = 2;
brojIliString = '232';

console.log(users[0].ime)

function StampajUser(korisnik: User | undefined): void {
    if(korisnik !== undefined) {
        console.log(korisnik.ime);  
    }
    throw Error();
}

type KorisnikUlogovan = 'ulogvan' | 'nije ulogovan';
console.log()

let user = {
    ime: 'sad',
    prezime: 'asda',
    ulogovan: 'nije ulogovan'
} as User;

StampajUser(user);

interface User {
    ime: string;
    prezime: string;
    ulogovan: KorisnikUlogovan;
}

interface DrugiUser extends User {
    id: number;
}

class Vozilo {
    brzinu: number;

    constructor(brzina: number) {
        this.brzinu = brzina;
    }
}
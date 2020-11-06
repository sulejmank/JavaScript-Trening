export interface User {
    password: string;
    email: string;
    grad?: string;
    datum?: string;
    name?: string;
    role?: Role;
    pol?: Pol;
    id: number;
}

export const GRADOVI = [
    'Beograd',
    'Novi Pazar'
];

export enum Pol {
    Muski = 'Muski',
    Zenski = 'Zenski'
}

export enum Role {
    Admin = 'Administrator',
    User = 'User'
}

export interface LoginOrRegisterDto {
    email: string;
    password: string;
    name: string;
    grad: string;
    datum: string;
    pol: Pol;
    isAdmin: boolean;
}

export interface Movie {
    Title: string;
    Year: string;
    Poster: string;
    imdbID: string;
    Type: string;
}

export const USERS: User[] = [
    {
        id: 1,
        name: 'Dzoni',
        password: 'dzoni',
        email: 'dzoni@gmail.com',
        role: Role.Admin,
        grad: 'Beograd',
        datum: '11.06.2020',
        pol: Pol.Zenski
    },
    {
        id: 2,
        name: 'Jakub',
        password: 'jaksa',
        email: 'jaksa@gmail.com',
        grad: 'Beograd',
        datum: '11.06.2020',
        pol: Pol.Muski
    },
];

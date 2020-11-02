export interface User {
    id: number;
    name: string;
    password: string;
    email: string;
    role?: Role;
}

export enum Role {
    Admin = 'Administrator',
    User = 'User'
}

export interface LoginOrRegisterDto {
    email: string;
    password: string;
    name: string;
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
    },
    {
        id: 2,
        name: 'Jakub',
        password: 'jaksa',
        email: 'jaksa@gmail.com',
    },
];

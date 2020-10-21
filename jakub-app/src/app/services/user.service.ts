import { Injectable } from '@angular/core';
import { LoginOrRegisterDto, User, USERS } from '../types';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  usersDb = USERS;
  loggedUser: User;

  login(loginData: LoginOrRegisterDto): Observable<User> {
    const user = this.usersDb.find(x => x.email === loginData.email &&
      x.password === loginData.password);

    this.loggedUser = user;
    return of(user);
  }

  register(loginData: LoginOrRegisterDto): void {
    this.usersDb.push({
      ...loginData,
      id: Math.random() * 10 + 5,
    });
  }
}

import { Injectable } from '@angular/core';
import { LoginOrRegisterDto, Pol, Role, User, USERS } from '../types';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  usersDb = USERS;
  loggedUser: User;

  constructor(private router: Router) { }

  login(loginData: LoginOrRegisterDto): Observable<User> {
    const user = this.usersDb.find(x => x.email === loginData.email &&
      x.password === loginData.password);

    this.loggedUser = user;

    if (user) {
      if (localStorage.getItem('user')) {
        localStorage.clear();
      }
      localStorage.setItem('user', JSON.stringify(user));
    }

    return of(user);
  }

  register(
    loginData: LoginOrRegisterDto,
    isAdmin?: boolean): void {
    this.usersDb.push({
      ...loginData,
      pol: loginData.pol as Pol,
      role: (loginData.isAdmin || isAdmin) ? Role.Admin : Role.User,
      id: Math.random() * 10 + 5 * 20,
    });
  }

  setLoggedUser(user: User): void {
    this.loggedUser = user;
  }

  logutUser(): void {
    localStorage.clear();

    this.loggedUser = undefined;
    this.router.navigate(['/login']);
  }
}

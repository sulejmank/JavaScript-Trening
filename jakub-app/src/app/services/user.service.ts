import { Injectable } from '@angular/core';
import { LoginDto, User, USERS } from '../types';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  usersDb = USERS;

  login(loginData: LoginDto): Observable<User> {
    const user = this.usersDb.find(x => x.email === loginData.email &&
                                        x.password === loginData.password);
    if (user) {
      return of(user);
    }
  }
}

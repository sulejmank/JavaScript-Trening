import { Component, Input, OnInit } from '@angular/core';
import { LoginOrRegisterDto } from '../types';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Input() isAdminPage = false;
  data = { name: '', email: '', password: '' } as LoginOrRegisterDto;
  isRegister = false;

  constructor(private userService: UserService, private router: Router) { }

  login(): void {
    this.userService.login(this.data).subscribe(user => {
      if (user) {
        this.router.navigate(['home']);
      } else {
        alert('Pogresni podaci!');
      }
    });
  }

  register(): void {
    if (this.isRegister || this.isAdminPage) {
      this.userService.register(this.data, this.isAdminPage);
      this.isRegister = false;
    } else {
      this.isRegister = true;
    }
  }

  get getTitle(): string {
    if (this.isRegister || this.isAdminPage) {
      return 'Register Form';
    }
    return 'Login Form';
  }

  get getRegisterLabel(): string {
    if (this.isRegister || this.isAdminPage) {
      return 'Register';
    }
    return 'Create account';
  }
}

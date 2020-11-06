import { Component, Input, OnInit } from '@angular/core';
import { LoginOrRegisterDto, GRADOVI, Pol } from '../types';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { sha256 } from '../hash';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Input() isAdminPage = false;
  data = { name: '', email: '', password: '', grad: '', datum: '', pol: {}, isAdmin: false } as LoginOrRegisterDto;
  gradovi = GRADOVI;
  isRegister = false;
  muski = Pol.Muski;
  zenski = Pol.Zenski;

  constructor(private userService: UserService, private router: Router) { }

  async login(): Promise<void> {
    this.data.password = await sha256(this.data.password);

    this.userService.login(this.data).subscribe(user => {
      if (user) {
        this.router.navigate(['home']);
      } else {
        alert('Pogresni podaci!');
      }
    });
  }

  async register(): Promise<void> {
    this.data.password = await sha256(this.data.password);
    console.log(this.data.password)
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

import { Component, OnInit } from '@angular/core';
import { LoginDto } from '../types';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginData = {name: '', email: '', password: ''} as LoginDto;

  constructor(private userService: UserService) { }

  login(): void  {
  
  }

}

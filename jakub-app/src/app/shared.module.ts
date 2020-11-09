import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from './material/material.module';

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        MaterialModule,
        FormsModule
    ],
    exports: [
        LoginComponent,
        MaterialModule,
        FormsModule
    ],
    providers: [],
  })
  export class SharedModule { }

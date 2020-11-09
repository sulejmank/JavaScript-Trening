import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared.module';
import { adminRoutes } from './admin.routes';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        AdminComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(adminRoutes)
    ],
    exports: [
        AdminComponent
    ],
    providers: [],
  })
  export class AdminModule { }

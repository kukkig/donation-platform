import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login.routing';

@NgModule({
    imports: [
      FormsModule,
      ReactiveFormsModule,
      SharedModule,
      LoginRoutingModule
    ],
    declarations: [
      LoginComponent
    ],
    providers : []
  })
  export class LoginModule { }
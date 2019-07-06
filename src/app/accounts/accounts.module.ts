import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BrowserModule } from '@angular/platform-browser';
import { AccountsRoutingModule } from './accounts-routing.module';
import { MatCardModule } from '@angular/material';
import { ServiceModule } from 'src/services/service.module';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    AccountsRoutingModule,
    BrowserModule,
    ReactiveFormsModule,
    MatCardModule,
    ServiceModule
  ],
  providers: []
})
export class AccountsModule { }

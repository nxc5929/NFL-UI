import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
      path: 'accounts',
    //   canActivate: [ AuthNGuard ],
      children: [
        // { path: 'search', canActivate: [ AuthNGuard ], component: SearchPageComponent},
        { path: 'login', component:  LoginComponent},
        { path: 'register', component:  RegisterComponent},
      ]
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AccountsRoutingModule { }
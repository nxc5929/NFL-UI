import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SwitchAccountComponent } from './switch-account/switch-account.component';
import { AdminAuthGuard } from 'src/guards/admin-auth-guard';
import { UpdateSpreadComponent } from './update-spread/update-spread.component';

const routes: Routes = [
    {
      path: 'admin',
      canActivate: [ AdminAuthGuard ],
      children: [
        { path: 'switch-account', component: SwitchAccountComponent},
        { path: 'update-spread', component: UpdateSpreadComponent}
      ]
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AdminRoutingModule { }
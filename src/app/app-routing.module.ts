import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectPickComponent } from './game/select-pick/select-pick.component';
import { AuthGuard } from 'src/auth/auth-guard';


const routes: Routes = [
  { path: 'select-picks', component: SelectPickComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

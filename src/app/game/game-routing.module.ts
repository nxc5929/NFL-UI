import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from 'src/auth/auth-guard';
import { SelectPickComponent } from './select-pick/select-pick.component';
import { MatrixComponent } from './matrix/matrix.component';

const routes: Routes = [
    {
      path: 'game',
      canActivate: [ AuthGuard ],
      children: [
        { path: 'select-picks', component: SelectPickComponent},
        { path: 'matrix', component: MatrixComponent}
      ]
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class GameRoutingModule { }
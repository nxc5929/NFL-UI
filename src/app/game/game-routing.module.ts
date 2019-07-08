import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from 'src/auth/auth-guard';
import { SelectPickComponent } from './select-pick/select-pick.component';
import { MatrixComponent } from './matrix/matrix.component';
import { SelectPickSortableComponent } from './select-pick-sortable/select-pick-sortable.component';

const routes: Routes = [
    {
      path: 'game',
      canActivate: [ AuthGuard ],
      children: [
        { path: 'select-picks', component: SelectPickComponent},
        { path: 'select-picks-sortable', component: SelectPickSortableComponent},
        { path: 'matrix', component: MatrixComponent}
      ]
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class GameRoutingModule { }
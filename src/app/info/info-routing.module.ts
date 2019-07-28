import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { EarlyComponent } from './early/early.component';
import { LateComponent } from './late/late.component';

const routes: Routes = [
    {
      path: 'info',
      children: [
        { path: 'too-early', component:  EarlyComponent},
        { path: 'too-late', component:  LateComponent},
      ]
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class InfoRoutingModule { }
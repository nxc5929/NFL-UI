import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from 'src/guards/auth-guard';
import { MatrixComponent } from './matrix/matrix.component';
import { StandingsComponent } from './standings/standings.component';
import { SurvivorComponent } from './survivor/survivor.component';
import { WeekNotStarted } from 'src/guards/week-not-started-guard';
import { WeekStarted } from 'src/guards/week-started-guard';
import { SelectPicksComponent } from './select-picks/select-picks.component';

const routes: Routes = [
    {
      path: 'game',
      canActivate: [ AuthGuard ],
      children: [
        { path: 'select-picks', component: SelectPicksComponent, canActivate: []},
        { path: 'matrix', component: MatrixComponent, canActivate: []},
        { path: 'standings', component: StandingsComponent},
        { path: 'survivors', component: SurvivorComponent, canActivate: []}
      ]
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class GameRoutingModule { }

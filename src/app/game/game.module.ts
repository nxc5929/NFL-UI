import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceModule } from 'src/services/service.module';
import { GameRoutingModule } from './game-routing.module';
import { MatCardModule, MatButtonModule, MatRadioModule, MatInputModule, MatFormFieldModule, MatGridListModule, MatTableModule, MatSelectModule, MatOptionModule, MatStepperModule, MatIconModule, MatSliderModule } from '@angular/material';
import { PickCardComponent } from './pick-common/pick-card/pick-card.component';
import { MatrixComponent } from './matrix/matrix.component';
import { PipeModule } from 'src/pipes/pipe.module';
import { SelectPickSortableComponent } from './select-pick-sortable/select-pick-sortable.component';
import { DragDropModule } from  '@angular/cdk/drag-drop';
import { SortableGameComponent } from './select-pick-sortable/sortable-game/sortable-game.component';
import { PickSurvivorComponent } from './pick-common/pick-survivor/pick-survivor.component';
import { StandingsComponent } from './standings/standings.component';
import { SurvivorComponent } from './survivor/survivor.component';
import { SelectPicksComponent } from './select-picks/select-picks.component';
import { SelectPickStandardComponent } from './select-pick-standard/select-pick-standard.component';
import { PickTeamComponent } from './pick-common/pick-team/pick-team.component';
import { PickHeaderComponent } from './pick-common/pick-header/pick-header.component';
import { SpreadIndicatorComponent } from './pick-common/spread-indicator/spread-indicator.component';

@NgModule({
  declarations: [
    SelectPicksComponent,
    SelectPickSortableComponent,
    SelectPickStandardComponent,
    PickCardComponent,
    MatrixComponent,
    SortableGameComponent,
    PickSurvivorComponent,
    StandingsComponent,
    SurvivorComponent,
    SelectPicksComponent,
    PickTeamComponent,
    PickHeaderComponent,
    SpreadIndicatorComponent,
  ],
  imports: [
    GameRoutingModule,
    BrowserModule,
    DragDropModule,
    PipeModule,
    MatCardModule,
    MatButtonModule,
    MatSliderModule,
    MatTableModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    ServiceModule,
    MatStepperModule,
    MatIconModule
  ],
  providers: []
})
export class GameModule { }

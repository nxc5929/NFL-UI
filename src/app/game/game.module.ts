import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceModule } from 'src/services/service.module';
import { SelectPickComponent } from './select-pick/select-pick.component';
import { GameRoutingModule } from './game-routing.module';
import { MatCardModule, MatButtonModule, MatRadioModule, MatInputModule, MatFormFieldModule, MatGridListModule, MatTableModule, MatSelectModule, MatOptionModule, MatStepperModule, MatIconModule } from '@angular/material';
import { PickCardComponent } from './select-pick/pick-card/pick-card.component';
import { MatrixComponent } from './matrix/matrix.component';
import { PipeModule } from 'src/pipes/pipe.module';
import { SelectPickSortableComponent } from './select-pick-sortable/select-pick-sortable.component';
import { DragDropModule } from  '@angular/cdk/drag-drop';
import { SortableGameComponent } from './select-pick-sortable/sortable-game/sortable-game.component';

@NgModule({
  declarations: [
    SelectPickComponent,
    PickCardComponent,
    MatrixComponent,
    SelectPickSortableComponent,
    SortableGameComponent
  ],
  imports: [
    GameRoutingModule,
    BrowserModule,
    DragDropModule,
    PipeModule,
    MatCardModule,
    MatButtonModule,
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

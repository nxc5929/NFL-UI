import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceModule } from 'src/services/service.module';
import { SelectPickComponent } from './select-pick/select-pick.component';
import { GameRoutingModule } from './game-routing.module';
import { MatCardModule, MatButtonModule, MatRadioButton, MatRadioModule, MatInputModule, MatFormFieldModule, MatGridListModule } from '@angular/material';
import { PickCardComponent } from './select-pick/pick-card/pick-card.component';
import { MatrixComponent } from './matrix/matrix.component';
import { PlayerColumnComponent } from './matrix/player-column/player-column.component';
import { GameColumnComponent } from './matrix/game-column/game-column.component';

@NgModule({
  declarations: [
    SelectPickComponent,
    PickCardComponent,
    MatrixComponent,
    PlayerColumnComponent,
    GameColumnComponent
  ],
  imports: [
    GameRoutingModule,
    BrowserModule,
    MatCardModule,
    MatButtonModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    ServiceModule,
  ],
  providers: []
})
export class GameModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceModule } from 'src/services/service.module';
import { SelectPickComponent } from './select-pick/select-pick.component';
import { GameRoutingModule } from './game-routing.module';
import { MatCardModule, MatButtonModule, MatRadioModule, MatInputModule, MatFormFieldModule, MatGridListModule, MatTableModule, MatSelectModule, MatOptionModule } from '@angular/material';
import { PickCardComponent } from './select-pick/pick-card/pick-card.component';
import { MatrixComponent } from './matrix/matrix.component';
import { WinnerPipe } from 'src/pipes/check-winner.pipe';
import { PipeModule } from 'src/pipes/pipe.module';

@NgModule({
  declarations: [
    SelectPickComponent,
    PickCardComponent,
    MatrixComponent
  ],
  imports: [
    GameRoutingModule,
    BrowserModule,
    PipeModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    ServiceModule
  ],
  providers: []
})
export class GameModule { }

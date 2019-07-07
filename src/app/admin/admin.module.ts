import { NgModule } from '@angular/core';
import { ServiceModule } from 'src/services/service.module';
import { SwitchAccountComponent } from './switch-account/switch-account.component';
import { AdminRoutingModule } from './admin-routing.module';
import { MatGridListModule, MatCardModule, MatRadioModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { SubmittedPicksPipe } from 'src/pipes/submitted-picks.pipe.';
import { UpdateSpreadComponent } from './update-spread/update-spread.component';
import { GameSpreadComponent } from './update-spread/game-spread/game-spread.component';

@NgModule({
  declarations: [
    SwitchAccountComponent,
    SubmittedPicksPipe,
    UpdateSpreadComponent,
    GameSpreadComponent
  ],
  imports: [
    AdminRoutingModule,
    BrowserModule,
    ServiceModule,
    MatGridListModule,
    MatCardModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: []
})
export class AdminModule { }

import { NgModule } from '@angular/core';
import { EarlyComponent } from './early/early.component';
import { LateComponent } from './late/late.component';
import { InfoRoutingModule } from './info-routing.module';
import { MatCardModule } from '@angular/material';

@NgModule({
  declarations: [
    EarlyComponent,
    LateComponent
  ],
  imports: [
    MatCardModule,
    InfoRoutingModule
  ],
  providers: []
})
export class InfoModule { }

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { HelperPipe } from 'src/pipes/helper.pipe';
import { WinnerPipe } from './check-winner.pipe';
import { SubmittedPicksPipe } from './submitted-picks.pipe';

@NgModule({
  declarations: [HelperPipe, WinnerPipe, SubmittedPicksPipe],
  imports: [HttpClientModule],
  providers: []
})
export class PipeModule { }

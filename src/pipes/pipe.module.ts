import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { HelperPipe } from 'src/pipes/helper.pipe';
import { SubmittedPicksPipe } from './submitted-picks.pipe';

@NgModule({
  declarations: [HelperPipe, SubmittedPicksPipe],
  imports: [HttpClientModule],
  exports: [HelperPipe, SubmittedPicksPipe],
  providers: []
})
export class PipeModule { }

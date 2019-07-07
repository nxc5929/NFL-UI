import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { HelperPipe } from 'src/debug/HelperPipe';
import { WinnerPipe } from './check-winner.pipe';

@NgModule({
  declarations: [HelperPipe, WinnerPipe],
  imports: [HttpClientModule],
  providers: []
})
export class PipeModule { }

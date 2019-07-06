import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatSidenavModule, MatToolbarModule, MatListModule, MatButtonModule, MatIconModule } from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { AccountsModule } from './accounts/accounts.module';
import { AlertComponent } from './alert/alert.component';
import { GameModule } from './game/game.module';


@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    AlertComponent
  ],
  imports: [
    AccountsModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    GameModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    LayoutModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

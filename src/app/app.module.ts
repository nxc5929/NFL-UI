import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatSidenavModule, MatToolbarModule, MatListModule, MatButtonModule, MatIconModule, MatMenuModule } from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { AccountsModule } from './accounts/accounts.module';
import { AlertComponent } from './alert/alert.component';
import { GameModule } from './game/game.module';
import { AccountService } from 'src/services/accounts/account-service';
import { AdminModule } from './admin/admin.module';


@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    AlertComponent
  ],
  imports: [
    AccountsModule,
    AdminModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    GameModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    LayoutModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule
  ],
  providers: [
    AccountService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

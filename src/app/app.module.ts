import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatSidenavModule, MatToolbarModule, MatListModule, MatButtonModule, MatIconModule, MatMenuModule, MatCardModule, MatGridListModule, MatSnackBarModule } from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { AccountsModule } from './accounts/accounts.module';
import { GameModule } from './game/game.module';
import { AccountService } from 'src/services/accounts/account-service';
import { AdminModule } from './admin/admin.module';
import { GameService } from 'src/services/game/game-service';
import { HomeComponent } from './home/home.component';
import { GameGridViewComponent } from './home/game-grid-view/game-grid-view.component';
import { PipeModule } from 'src/pipes/pipe.module';
import { LandingComponent } from './landing/landing.component';
import { AlertService } from 'src/services/alert-service';


@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    HomeComponent,
    GameGridViewComponent,
    LandingComponent
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
    MatGridListModule,
    MatCardModule,
    MatSnackBarModule,
    LayoutModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    PipeModule
  ],
  providers: [
    AccountService,
    GameService,
    AlertService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AccountService } from 'src/services/accounts/account-service';
import { UserInfo } from 'src/services/accounts/user-info';
import { SecureUser } from 'src/services/accounts/secure-user';

@Component({
  selector: 'main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  user: String
  adminUser: String
  admin: boolean = false;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private accountService: AccountService
  ) {
    var user: SecureUser = accountService.currentUserValue
    var adminUser: SecureUser = accountService.currentAdminValue
    if(user){
      this.user = user.firstName + " " + user.lastName;
      this.adminUser = adminUser.firstName + " " + adminUser.lastName;
      this.admin = adminUser.admin;
      console.log("Admin: " + this.admin)
    }
  }

  logout(){
    this.accountService.logout();
  }



}

import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AccountService } from 'src/services/accounts/account-service';


@Injectable({ providedIn: 'root' })
export class AdminAuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private accountService: AccountService
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUser = this.accountService.currentAdminValue;
        if (currentUser && currentUser.admin) {
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/accounts/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}
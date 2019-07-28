import { Injectable, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserInfo } from './user-info';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

import * as jwt_decode from "jwt-decode";
import { SecureUser } from './secure-user';

@Injectable({providedIn: 'root'})
export class AccountService{
    constructor(private http: HttpClient) { }

    getHttpOptions() {
        return {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `${this.userToken}`
          }
        };
      }

    createAccount(userInfo: UserInfo): Observable<any>{
        return this.http.post(`${environment.apiURL}/accounts/create`, userInfo);
    }

    login(userInfo: UserInfo): Observable<any>{
        return this.http.post(`${environment.apiURL}/accounts/login`, userInfo);
    }

    logout(){
        this.http.post(`${environment.apiURL}/accounts/secure/logout`, this.getHttpOptions())
        .subscribe(res => {
            localStorage.removeItem("token");
            localStorage.removeItem("adminToken");
            window.location.reload();
        },
        err => {
            console.error("Problem occured while logging out");
            localStorage.removeItem("token");
            localStorage.removeItem("adminToken");
            window.location.reload();
        });
    }

    get currentAdminValue(): SecureUser{
        var token = localStorage.getItem("adminToken");
        return this.userValue(token);
    }

    get currentUserValue(): SecureUser{
        var token = localStorage.getItem("token");
        return this.userValue(token);
    }

    userValue(token): SecureUser{
        if(token == null){
            return null;
        }
        var tokenMap = jwt_decode(token);
        return new SecureUser(tokenMap.firstName, tokenMap.lastName, tokenMap.admin);
    }

    setUserToken(token: string){
        localStorage.setItem("token", token);
        localStorage.setItem("adminToken", token);
    }

    get userToken(): string{
        return localStorage.getItem("token");
    }

    get adminToken(): string{
        return localStorage.getItem("adminToken");
    }

}
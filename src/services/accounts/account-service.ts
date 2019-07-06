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

    createAccount(userInfo: UserInfo): Observable<any>{
        return this.http.post(`${environment.apiURL}/accounts/create`, userInfo);
    }

    login(userInfo: UserInfo): Observable<any>{
        return this.http.post(`${environment.apiURL}/accounts/login`, userInfo);
    }

    get currentUserValue(): SecureUser{
        var token = localStorage.getItem("token");
        if(token == null){
            return null;
        }
        var tokenMap = jwt_decode(token);
        return new SecureUser(tokenMap.firstName, tokenMap.lastName, tokenMap.admin);
    }

    setUserToken(token: string){
        localStorage.setItem("token", token);
    }

    get userToken(): string{
        return localStorage.getItem("token");
    }

}
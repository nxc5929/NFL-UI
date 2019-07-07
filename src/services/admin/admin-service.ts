import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { GenericResponse } from '../generic-response';
import { AccountService } from '../accounts/account-service';
import { PlayerStatusModel, GamesModel } from './admin-models';
import { Game } from '../game/pick-model';

@Injectable({ providedIn: 'root' })
export class AdminService {
    constructor(private http: HttpClient, private accountService: AccountService) { }

    getHttpOptions() {
        return {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${this.accountService.adminToken}`
            }
        };
    }

    getPlayerStatus(): Observable<PlayerStatusModel> {
        return this.http.get<PlayerStatusModel>(`${environment.adminApiURL}/player-status`, this.getHttpOptions());
    }

    getGames(): Observable<GamesModel>{
        return this.http.get<GamesModel>(`${environment.adminApiURL}/spread`, this.getHttpOptions());
    }

    setSpreads(games:Game[]){
        return this.http.post(`${environment.adminApiURL}/spread`, games, this.getHttpOptions());
    }

    spoofAccount(id: number): Observable<GenericResponse<string>> {
        return this.http.post<GenericResponse<string>>(`${environment.adminApiURL}/${id}/login`, null, this.getHttpOptions());
    }

    setSpoofedToken(token: string){
        localStorage.setItem("token", token);
    }
}
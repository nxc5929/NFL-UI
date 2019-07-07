import { Injectable, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

import { AccountService } from '../accounts/account-service';
import { PickModel, Player, Team, WeekModel, Game } from './pick-model';
import { GenericResponse } from '../generic-response';

@Injectable({ providedIn: 'root' })
export class GameService {
  constructor(private http: HttpClient, private accountService: AccountService) { }

  getHttpOptions() {
    return {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${this.accountService.userToken}`
      }
    };
  }

  getPicks(): Observable<PickModel> {
    return this.http.get<PickModel>(`${environment.secureApiURL}/picks`, this.getHttpOptions());
  }

  setPicks(picks: Player): Observable<GenericResponse<string>> {
    return this.http.post<GenericResponse<string>>(`${environment.secureApiURL}/picks`, picks, this.getHttpOptions());
  }

  getMatrix(): Observable<WeekModel>{
    return this.http.get<WeekModel>(`${environment.secureApiURL}/picks/matrix`, this.getHttpOptions());
  }

  getWeeks(): Observable<string>{
    return this.http.get<string>(`${environment.secureApiURL}/picks/weeks`, this.getHttpOptions());
  }
  getTeams(): Observable<GenericResponse<Team[]>>{
    return this.http.get<GenericResponse<Team[]>>(`${environment.secureApiURL}/picks/teams`, this.getHttpOptions());
  }

}
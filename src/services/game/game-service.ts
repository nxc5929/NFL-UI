import { Injectable, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

import { AccountService } from '../accounts/account-service';
import { PickModel, Player, Team, WeekModel, Game, StandingsModel } from './pick-model';
import { GenericResponse } from '../generic-response';
import { GameInfoModel } from './game-info-model';

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

  getPastMatrix(weekId: number): Observable<WeekModel>{
    return this.http.get<WeekModel>(`${environment.secureApiURL}/picks/${weekId}/matrix`, this.getHttpOptions());
  }

  getWeeks(): Observable<GenericResponse<string[]>>{
    return this.http.get<GenericResponse<string[]>>(`${environment.secureApiURL}/picks/weeks`, this.getHttpOptions());
  }

  getSurvivor(): Observable<GenericResponse<any>>{
    return this.http.get<GenericResponse<any>>(`${environment.secureApiURL}/picks/survivor`, this.getHttpOptions());
  }

  getStandings(): Observable<StandingsModel>{
    return this.http.get<StandingsModel>(`${environment.secureApiURL}/picks/standings`, this.getHttpOptions());
  }

  getWeekInfo(): Observable<GameInfoModel>{
    return this.http.get<GameInfoModel>(`${environment.apiURL}/general/info`, this.getHttpOptions());
  }

}
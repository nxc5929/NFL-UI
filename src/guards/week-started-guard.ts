import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { GameService } from 'src/services/game/game-service';


@Injectable({ providedIn: 'root' })
export class WeekStarted implements CanActivate {
    constructor(
        private router: Router,
        private gameService: GameService
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        // this.gameService.getWeekInfo().subscribe(
        //     res => {
        //         console.log(res);
        //         if(!res.data.gameStarted){
        //             this.router.navigate(["/game/select-picks"]);
        //         }
        //     }
        // );
        return true;
    }
}
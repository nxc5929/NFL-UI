import { Pipe, PipeTransform } from '@angular/core';
import { Game, Team } from 'src/services/game/pick-model';

@Pipe({ name: 'styleGame' })
export class WinnerPipe implements PipeTransform {
    transform(game: Game, referenceTeam: Team, waitTillEnd: boolean = true, directStyle: boolean = false) {
        if (game.gameStarted && (game.final || !waitTillEnd)) {
            var homeTeam: number = game.homeTeam.id;
            var homeScore: number = game.homeScore;
            var awayTeam: number = game.awayTeam.id;
            var awayScore: number = game.awayScore;

            var spread: number;
            var favoriteTeam: number;
            if(game.spread){
                spread = game.spread.points;
                favoriteTeam = game.spread.favTeam.id;
            }else{
                spread = 0;
                favoriteTeam = homeTeam;
            }

            homeScore += (homeTeam == favoriteTeam) ? -spread : spread;

            if ((homeScore > awayScore && homeTeam == referenceTeam.id)
                || (homeScore < awayScore && awayTeam == referenceTeam.id)) {
                return directStyle ? "lawngreen": "winner";
            } else {
                return directStyle ? "red" : "loser";
            }
        }
        return "";
    }
}
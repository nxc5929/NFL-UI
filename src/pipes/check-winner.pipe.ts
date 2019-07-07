import { Pipe, PipeTransform } from '@angular/core';
import { Game, Team } from 'src/services/game/pick-model';

@Pipe({ name: 'styleGame' })
export class WinnerPipe implements PipeTransform {
    transform(game: Game, referenceTeam: Team) {
        if (game.final) {
            var homeTeam: number = game.homeTeam.id;
            var homeScore: number = game.homeScore;
            var awayTeam: number = game.awayTeam.id;
            var awayScore: number = game.awayScore;

            var spread: number = game.spread.points;
            var favoriteTeam: number = game.spread.favTeam.id;

            homeScore += (homeTeam == favoriteTeam) ? -spread : spread;

            if ((homeScore > awayScore && homeTeam == referenceTeam.id)
                || (homeScore < awayScore && awayTeam == referenceTeam.id)) {
                return "winner";
            } else {
                return "loser";
            }
        }
        return "";
    }
}
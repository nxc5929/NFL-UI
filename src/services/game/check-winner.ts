import { Game, Team } from 'src/services/game/pick-model';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class WinnerService {
    winners(game: Game, referenceTeam: Team): boolean {
        var homeTeam: number = game.homeTeam.id;
        var homeScore: number = game.homeScore;
        var awayTeam: number = game.awayTeam.id;
        var awayScore: number = game.awayScore;

        var spread: number;
        var favoriteTeam: number;
        if (game.spread) {
            spread = game.spread.points;
            favoriteTeam = game.spread.favTeam.id;
        } else {
            spread = 0;
            favoriteTeam = homeTeam;
        }

        homeScore += (homeTeam == favoriteTeam) ? -spread : spread;

        if ((homeScore > awayScore && homeTeam == referenceTeam.id)
            || (homeScore < awayScore && awayTeam == referenceTeam.id)) {
            return true;
        } else {
            return false;
        };
    }

    winnersNoSpread(game: Game, referenceTeam: Team): boolean {
        game.spread.points = 0;
        return this.winners(game, referenceTeam); 
    }
}
import { GenericResponse } from '../generic-response';

export class PickModel extends GenericResponse<Player>{}

export class WeekModel extends GenericResponse<Week>{}

export class Week{
    constructor(
        public id: number,
        public games: Game[],
        public players: Player[],
        public normalWeek: boolean,
        public weekStarted: boolean
    ){}
}

export class Player{
    constructor(
        public id: number,
        public picks: Pick[],
        public survivor: Team,
        public tiebreaker: number,
        public account: Account
    ){}
}

export class Account{
    constructor(
        public id: number,
        public firstName: string,
        public lastName: string
    ){}
}



export class Pick{
    constructor(
        public id: number,
        public game: Game,
        public pick: Team,
        public index: number,
    ){}
}

export class Game{
    constructor(
        public id: number,
        public final: boolean,
        public gameStarted: boolean,
        public spread: Spread,
        public homeTeam: Team,
        public homeScore: number,
        public awayTeam: Team,
        public awayScore: number,
    ){}
}

export class Team{
    constructor(
        public id: number,
        public teamName: String,
        public teamAbv: String,
        public wins: number,
        public losses: number,
        public ties: number
    ){}
}

export class Spread{
    constructor(
        public id: number,
        public favTeam: Team,
        public points: number,
    ){}
}
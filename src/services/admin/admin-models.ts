import { Account, Game } from '../game/pick-model';
import { GenericResponse } from '../generic-response';

export class PlayerStatusModel extends GenericResponse<PlayerStatus[]>{}

export class GamesModel extends GenericResponse<Game[]>{}

export class PlayerStatus{
    constructor(
        public account: Account,
        public picksSubmitted: boolean
    ){}
}
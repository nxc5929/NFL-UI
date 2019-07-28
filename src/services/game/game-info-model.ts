import { GenericResponse } from '../generic-response';

export class GameInfoModel extends GenericResponse<GameInfo>{}

export class GameInfo{
    constructor(
        public gameStarted: boolean,
        public normalWeek: boolean
    ){}
}
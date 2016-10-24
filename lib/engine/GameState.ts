import {PlayerActions, Ship} from './interfaces';

export interface GameState {
    ship: Ship
    actions: PlayerActions
    hoursPerTick: number,
    content?: string
}
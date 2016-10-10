import { Action } from 'redux';
import { PlayerAction, Identified } from './GameState'

export enum Actions {
    TICK,
    START_ACTION,
    FINISH_ACTION
};

export interface TickAction extends Action {
    hours: number
}

export function isTickAction(a: Action): a is TickAction {
    return a.type === Actions.TICK;
}

export function makeTickAction(hours: number = 1): TickAction {
    return { type: Actions.TICK, hours };
}

export interface StartAction extends Action, Identified {}

export function isStartAction(a: Action): a is StartAction {
    return a.type === Actions.START_ACTION;
}

export function makeStartAction(action: PlayerAction): StartAction {
    return { type: Actions.START_ACTION, id: action.id };
}

export interface FinishAction extends Action, Identified {}

export function isFinishAction(a: Action): a is FinishAction {
    return a.type === Actions.FINISH_ACTION;
}

export function makeFinishAction(action: PlayerAction): FinishAction {
    return { type: Actions.FINISH_ACTION, id: action.id };
}
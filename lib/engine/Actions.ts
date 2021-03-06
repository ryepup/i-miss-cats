import { Action } from 'redux';
import { PlayerAction, Identified } from './interfaces'

export enum Actions {
    TICK,
    BEGIN,
    START_ACTION,
    FINISH_ACTION,
    NEW_GAME,
    CONTENT_LOADED
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

export interface StartAction extends Action, Identified { }

export function isStartAction(a: Action): a is StartAction {
    return a.type === Actions.START_ACTION;
}

export function makeStartAction(action: PlayerAction): StartAction {
    return { type: Actions.START_ACTION, id: action.id };
}

export interface FinishAction extends Action, Identified { }

export function isFinishAction(a: Action): a is FinishAction {
    return a.type === Actions.FINISH_ACTION;
}

export function makeFinishAction(action: PlayerAction): FinishAction {
    return { type: Actions.FINISH_ACTION, id: action.id };
}

export interface BeginAction extends Action { }

export function isBeginAction(a: Action): a is BeginAction {
    return a.type === Actions.BEGIN;
}

export function makeBeginAction(): BeginAction {
    return { type: Actions.BEGIN };
}

export interface NewGameAction extends Action { }

export function isNewGameAction(a: Action): a is NewGameAction {
    return a.type === Actions.NEW_GAME;
}

export function makeNewGameAction(): NewGameAction {
    return { type: Actions.NEW_GAME };
}

export interface ContentLoadedAction extends Action {
    content: string
}

export function isContentLoadedAction(a: Action): a is ContentLoadedAction {
    return a.type === Actions.CONTENT_LOADED;
}

export function makeContentLoadedAction(content: string): ContentLoadedAction {
    return {
        type: Actions.CONTENT_LOADED,
        content
    };
}
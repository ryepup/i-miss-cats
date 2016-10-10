import { Action } from 'redux';
import * as _ from 'lodash';
import { PlayerAction, GameState, Identified } from '../GameState';
import { isTickAction, isStartAction, isFinishAction } from '../Actions';
import { findAction, findAvailable } from '../PlayerActions';

export const actions = (state: PlayerAction[] = [], action: Action) => {
    if (isStartAction(action)) {
        return append(state, action);
    }

    if (isFinishAction(action)) {
        return state.filter(x => x.id !== action.id);
    }

    if (isTickAction(action) && state.length > 0) {
        const topAction = state[0];

        const updated = _.assign({}, topAction, {
            hours: topAction.hours + action.hours
        });
        return [updated].concat(state.slice(1));
    }

    return state;
}

export const availableActions = (state: PlayerAction[] = findAvailable(), action: Action) => {
    if (isStartAction(action)) {
        return state.filter(x => x.id !== action.id);
    }
    return state;
}

export const completedActions = (state: PlayerAction[] = [], action: Action) => {
    if (isFinishAction(action)) {
        return append(state, action);
    }
    return state;
}

export function recalculateAvailable(state: GameState, action: Action): GameState {
    if (isFinishAction(action)) {
        const ready = findAvailable(state.actions, state.completedActions);
        return _.assign({}, state, { availableActions: ready });

    }
    return state;
}

function append(list:PlayerAction[], item:Identified): PlayerAction[]{
    return list.concat([findAction(item)]);
}
import { Action, combineReducers } from 'redux';
import * as _ from 'lodash';
import { PlayerActions, PlayerAction, Identified } from '../interfaces'
import { isTickAction, isStartAction, isFinishAction } from '../Actions';
import { findAction, findAvailable } from '../PlayerActions';

const active = (state: PlayerAction[] = [], action: Action) => {
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

const available = (state: PlayerAction[] = [], action: Action) => {
    if (isStartAction(action)) {
        return state.filter(x => x.id !== action.id);
    }
    return state;
}

const completed = (state: PlayerAction[] = [], action: Action) => {
    if (isFinishAction(action)) {
        return append(state, action);
    }
    return state;
}

const simpleActionReducer = combineReducers<PlayerActions>({
     active, available, completed
});

const emptyActions:PlayerActions = {
    active: [],
    completed: [],
    available: findAvailable()
};

export const actions = (state: PlayerActions = emptyActions, action: Action) => {
    const nextState = simpleActionReducer(state, action);

    if (isFinishAction(action)) {
        const ready = findAvailable(nextState.completed, nextState.active);
        return _.assign({}, nextState, { available: ready });
    }

    return nextState;
}


function append(list:PlayerAction[], item:Identified): PlayerAction[]{
    return list.concat([findAction(item)]);
}


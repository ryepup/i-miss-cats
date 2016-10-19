import { combineReducers, Action } from 'redux'
import { actions } from './playerActions'
import { ship } from './ship'
import { GameState } from '../GameState'
import { isBeginAction, isNewGameAction } from '../Actions'

function hoursPerTick(state: number = 0, action: Action) {
    if (isBeginAction(action) || isNewGameAction(action)) {
        return 1;
    }
    return state;
}

const propertyReducers = combineReducers<GameState|undefined>({
    ship, actions, hoursPerTick
});

export const reducers = (state:GameState, action:Action) => {
    if(isNewGameAction(action)) return propertyReducers(undefined, action);
    return propertyReducers(state, action);
}
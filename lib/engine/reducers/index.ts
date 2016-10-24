import { combineReducers, Action } from 'redux'
import { actions } from './playerActions'
import { ship } from './ship'
import { GameState } from '../GameState'
import { isBeginAction, isNewGameAction, isContentLoadedAction } from '../Actions'

function hoursPerTick(state: number = 0, action: Action) {
    if (isBeginAction(action) || isNewGameAction(action)) {
        return 1;
    }
    return state;
}

function content(state:string = "Let's go home and play with some cats.", action:Action){
    if(isContentLoadedAction(action)){
        return action.content;
    }

    return state;
}

const propertyReducers = combineReducers<GameState|undefined>({
    ship, actions, hoursPerTick, content
});

export const reducers = (state:GameState, action:Action) => {
    if(isNewGameAction(action)) return propertyReducers(undefined, action);
    return propertyReducers(state, action);
}
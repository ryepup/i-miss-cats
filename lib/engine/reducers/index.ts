import { combineReducers, Action } from 'redux'
import { actions } from './playerActions'
import { ship } from './ship'
import { GameState } from '../GameState'
import { isBeginAction } from '../Actions'

function hoursPerTick (state:number = 0, action:Action){
    if(isBeginAction(action)){
        return 1;
    }
    return state;
}

export const reducers = combineReducers<GameState>({
    ship, actions, hoursPerTick
});

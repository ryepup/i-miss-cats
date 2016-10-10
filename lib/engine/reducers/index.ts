import { combineReducers, Reducer, Action } from 'redux'
import { actions, availableActions, completedActions, recalculateAvailable } from './playerActions'
import { date, travelTime } from './tick'
import { GameState } from '../GameState';

export const perProptertyReducers = combineReducers<GameState>({
    actions, date, travelTime, availableActions, completedActions
})

export const reducers: Reducer<GameState> = composeReducers(
    perProptertyReducers, recalculateAvailable
)


function composeReducers(...r:Reducer<GameState>[]) :Reducer<GameState>{
    return (state:GameState, action:Action) => {
        return r.reduce((acc, x) => x(acc, action), state)
    }
}

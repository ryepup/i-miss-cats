import { createStore } from 'redux'
import { GameState } from './GameState'
import { reducers } from './reducers'
import { makeFinishAction, makeTickAction } from './Actions'
export { GameState } from './GameState'

// TODO: save/load from localStorage

export const store = createStore<GameState>(reducers);

store.subscribe(() => {
    const state = store.getState();
    if(state.actions && state.actions.active){
        const headAction = state.actions.active[0]
        if(headAction && headAction.hours > headAction.totalHours){
            store.dispatch(makeFinishAction(headAction));
        }
    }
})

function doTick(){
    const state = store.getState();
    store.dispatch(makeTickAction(state.hoursPerTick));
}

setInterval(doTick, 1000);
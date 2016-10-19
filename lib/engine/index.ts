import { createStore } from 'redux'
import { GameState } from './GameState'
import { reducers } from './reducers'
import { makeFinishAction, makeTickAction } from './Actions'
import { save, load } from './SaveGame'
export { GameState } from './GameState'

export const store = createStore<GameState | undefined>(reducers, load());

store.subscribe(() => {
    const state = store.getState();
    if (state && state.actions && state.actions.active) {
        const headAction = state.actions.active[0]
        if (headAction && headAction.hours > headAction.totalHours) {
            store.dispatch(makeFinishAction(headAction));
        }
    }
})

function doTick() {
    const state = store.getState();
    if (state) {
        store.dispatch(makeTickAction(state.hoursPerTick));
    }
}

setInterval(doTick, 1000);
setInterval(() => save(store.getState()), 5000);
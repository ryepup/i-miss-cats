import { createStore } from 'redux';
import { GameState } from './GameState';
import { reducers } from './reducers';
import { makeFinishAction } from './Actions';

export { GameState } from './GameState';
export const store = createStore<GameState>(reducers);

store.subscribe(() => {
    const state = store.getState();
    if(state.actions){
        const headAction = state.actions[0]
        if(headAction && headAction.hours > headAction.totalHours){
            store.dispatch(makeFinishAction(headAction));
        }
    }
})
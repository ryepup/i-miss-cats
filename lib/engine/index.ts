import { createStore, applyMiddleware, Action, Dispatch } from 'redux'
import { GameState } from './GameState'
import { reducers } from './reducers'
import { makeFinishAction, makeTickAction, makeContentLoadedAction } from './Actions'
import { save, load } from './SaveGame'
import thunk from 'redux-thunk'
import { PlayerAction } from './interfaces'

export const store = createStore<GameState | undefined>(
    reducers,
    load(),
    applyMiddleware(thunk)
);

store.subscribe(() => {
    const state = store.getState();
    if (state && state.actions && state.actions.active) {
        const headAction = state.actions.active[0]
        if (headAction && headAction.hours > headAction.totalHours) {
            store.dispatch(makeComplexFinishAction(headAction));
        }
    }
})

setInterval(doTick, 1000);
setInterval(() => save(store.getState()), 5000);


function doTick() {
    const state = store.getState();
    if (state) {
        store.dispatch(makeTickAction(state.hoursPerTick));
    }
}


const makeComplexFinishAction = (action: PlayerAction) => {
    return function (dispatch: Dispatch<Action>) {
        dispatch(makeFinishAction(action))

        //dispatch({type:'LOADING'})
        fetch(`/content/${action.id}.md`)
            .then(readMarkdown)
            .then(text => dispatch(makeContentLoadedAction(text)), e => console.log(e));

        function readMarkdown(resp: Response) {
            const contentType = resp.headers.get("content-type");
            if (contentType === 'text/x-markdown; charset=UTF-8')
                return resp.text();
            throw Error(`Unexpected server response ${contentType}`)
        }
    }
}
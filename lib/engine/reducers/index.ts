import { combineReducers } from 'redux'
import { actions } from './playerActions'
import { ship } from './ship'
import { GameState } from '../GameState';

export const reducers = combineReducers<GameState>({
    ship, actions
});

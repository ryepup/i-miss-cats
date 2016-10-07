import { createStore } from 'redux';
import { tick } from './tick';
import { GameState } from './GameState';

export { GameState } from './GameState';
export { Actions } from './Actions';

const initalState = { date: new Date(3055, 0, 14) };

export const store = createStore<GameState>(tick, initalState);

import * as React from 'react';
import { Game } from './Game';
import { store } from '../engine';
import { GameState } from '../engine/GameState';
import { PlayerAction } from '../engine/interfaces';
import { makeTickAction, makeStartAction } from '../engine/Actions';

export class GameContainer extends React.Component<{}, GameState> {
    timer: Number;

    constructor() {
        super();
        this.state = store.getState();
        store.subscribe(() => this.setState(store.getState()));
    }

    componentDidMount() {
        this.timer = setInterval(
            () => store.dispatch(makeTickAction(1)),
            1000);
    }

    onStart(action: PlayerAction) {
        store.dispatch(makeStartAction(action))
    }

    render() {
        return <Game gameState={this.state} onStart={this.onStart} />;
    }
}
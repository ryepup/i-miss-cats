import * as React from 'react';
import { Game } from './Game';
import { GameState, store, Actions } from '../engine';

export class GameContainer extends React.Component<{}, GameState> {
    timer: Number;

    constructor() {
        super();
        this.state = store.getState();
        store.subscribe(() => this.setState(store.getState()));
    }

    componentDidMount() {
        this.timer = setInterval(
            () => store.dispatch({ type: Actions.TICK }),
            1000);
    }

    render() {
        return <Game gameState={this.state} />;
    }
}
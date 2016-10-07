import * as React from 'react';
import { Game } from './Game';

export class GameContainer extends React.Component<{}, {}> {
    getInitialState() {
        // TODO: load saved state
        return {}
    }

    componentDidMount() {
        // TODO: start timer
    }

    render() {
        return <Game />;
    }
}
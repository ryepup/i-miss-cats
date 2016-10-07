import * as React from 'react';
import { Stats } from './Stats';
import { Player } from './Player';
import { Actions } from './Actions';
import { Reader } from './Reader';
import {GameState} from '../engine';

export interface GameProps{
    gameState :GameState;
}

export function Game(props:GameProps) {
    return <div className="container-fluid">
        <div className="row">
            <div className="col-xs-12">
                <Stats date={props.gameState.date}
                speed={props.gameState.speed}
                distanceToEarth={props.gameState.distanceToEarth}
                travelTime={props.gameState.travelTime}
                 />
            </div>
        </div>
        <div className="row">
            <div className="col-xs-4">
                <Actions />
            </div>
            <div className="col-xs-4">
                <Reader />
            </div>
            <div className="col-xs-4">
                <Player />
            </div>
        </div>
    </div>;
}
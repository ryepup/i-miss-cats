import * as React from 'react'
import { StatsContainer } from './Stats'
import { Player } from './Player'
import { ActionsContainer } from './Actions'
import { Reader } from './Reader'

export function Game() {
    return <div className="container-fluid">
        <div className="row">
            <div className="col-xs-12">
                <StatsContainer />
            </div>
        </div>
        <div className="row">
            <div className="col-xs-4">
                <ActionsContainer />
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
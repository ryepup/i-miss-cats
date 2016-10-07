import * as React from 'react';
import { Stats } from './Stats';
import { Player } from './Player';
import { Actions } from './Actions';
import { Reader } from './Reader';

export function Game() {
    return <div className="container-fluid">
        <div className="row">
            <div className="col-xs-12">
                <Stats />
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
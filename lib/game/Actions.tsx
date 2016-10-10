import * as React from 'react';
import { PlayerAction } from '../engine/GameState'


export interface ActionsProps {
    actions: PlayerAction[]
    available: PlayerAction[]
    onStart: (action:PlayerAction) => any
}


export function Actions(props: ActionsProps) {

    return <div>
        <h4>Active</h4>

        {props.actions.map(actionItem)}

        <h4>Available ({props.available.length})</h4>
        {props.available.map(availableItem)}
    </div>;

    function actionItem(item:PlayerAction, index:number, list:PlayerAction[]) {
        const pct = 100 * item.hours / item.totalHours;
        const canMoveUp = index > 0;
        const canMoveDown = index < (list.length - 1)

        return <div key={item.id}>
            <strong>{item.name}</strong>
            <div className="pull-right">
                <div className="btn-group btn-group-sm">
                    <button type="button" className="btn btn-default"
                        disabled={canMoveUp}>
                        <span className="glyphicon glyphicon-arrow-up"></span>
                    </button>
                    <button type="button" className="btn btn-default"
                        disabled={canMoveDown}
                        >
                        <span className="glyphicon glyphicon-arrow-down"></span>
                    </button>
                </div>
            </div>
            <div className="clearfix"></div>
            <div className="progress">
                <div className="progress-bar" style={{ width: `${pct}%` }}>
                    {item.hours}/{item.totalHours}
                </div>
            </div>
        </div>
    }

    function availableItem(item:PlayerAction) {
        return <div key={item.id}>
            <em>{item.name} ({item.totalHours}hours)</em>
            <div className="pull-right">
                <button className="btn btn-xs btn-default"
                    onClick={() => props.onStart(item)} >Start</button>
            </div>
        </div>
    }
}
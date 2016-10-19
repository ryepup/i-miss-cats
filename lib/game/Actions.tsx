import * as React from 'react';
import { PlayerAction, PlayerActions } from '../engine/interfaces'
import { GameState } from '../engine/GameState'
import { connect } from 'react-redux'
import { Action, Dispatch } from 'redux'
import { makeStartAction } from '../engine/Actions'
import CSSTransitionGroup = require('react-addons-css-transition-group')

export interface ActionsProps {
    actions: PlayerActions
    onStart: (a:PlayerAction) => Action
}

const mapStateToProps = (state: GameState) => {
  return { actions: state.actions };
}

const mapDispatchToProps = (dispatch:Dispatch<Action>) => {
  return {
    onStart: (a: PlayerAction) => dispatch(makeStartAction(a))
  }
}

export const ActionsContainer = connect(mapStateToProps, mapDispatchToProps)(Actions);

function Actions(props: ActionsProps) {

    return <div>
        <h4>Active</h4>

        <div className="container-fluid">
            <CSSTransitionGroup
                transitionName="quick-fade"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}>
            {props.actions.active.map(actionItem)}
            </CSSTransitionGroup>
        </div>

        <h4>Available ({props.actions.available.length})</h4>

        <div className="container-fluid">
            {props.actions.available.map(availableItem)}
        </div>
    </div>;

    function actionItem(item: PlayerAction, index: number, list: PlayerAction[]) {
        const pct = 100 * item.hours / item.totalHours;
        const canMoveUp = index > 0;
        const canMoveDown = index < (list.length - 1)

        return <div key={item.id} className="row">
            <div className="col-xs-3">
                <button type="button"
                    className="btn btn-sm btn-default btn-block"
                    disabled={!canMoveUp}>
                    <span className="glyphicon glyphicon-arrow-up"></span>
                </button>
            </div>
            <div className="col-xs-6">
                <strong>{item.name}</strong>
            </div>
            <div className="col-xs-3">
                <button type="button"
                    className="btn btn-sm btn-default btn-block"
                    disabled={!canMoveDown}>
                    <span className="glyphicon glyphicon-arrow-down"></span>
                </button>
            </div>

            <div className="col-xs-12" style={{ marginTop: '0.5em' }}>
                <div className="progress">
                    <div className="progress-bar" style={{ width: `${pct}%` }}>
                        {item.hours}/{item.totalHours}
                    </div>
                </div>
            </div>
        </div>
    }

    function availableItem(item: PlayerAction) {
        return <div key={item.id} className="row"
            style={{ marginBottom: '0.5em' }}>
            <div className="col-xs-8">
                <em>{item.name} ({item.totalHours} hours)</em>
            </div>
            <div className="col-xs-4">
                <button className="btn btn-sm btn-block btn-default"
                    onClick={() => props.onStart(item)} >Start</button>
            </div>
        </div>
    }
}
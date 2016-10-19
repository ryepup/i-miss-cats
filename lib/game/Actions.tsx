import * as React from 'react';
import { PlayerAction, PlayerActions } from '../engine/interfaces'
import { GameState } from '../engine/GameState'
import { connect } from 'react-redux'
import { Action, Dispatch } from 'redux'
import { makeStartAction } from '../engine/Actions'
import { QuickFadeCSSGroup } from './Transitions'
import { Grid, Row, Col, ProgressBar, Button } from 'react-bootstrap'


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

        <Grid fluid={true}>
            <QuickFadeCSSGroup>
                {props.actions.active.map(actionItem)}
            </QuickFadeCSSGroup>
        </Grid>

        <h4>Available ({props.actions.available.length})</h4>

        <Grid fluid={true}>
            <QuickFadeCSSGroup>
                {props.actions.available.map(availableItem)}
            </QuickFadeCSSGroup>
        </Grid>
    </div>;

    function actionItem(item: PlayerAction, index: number, list: PlayerAction[]) {
        return <Row key={item.id}>
            <Col xs={6}>
                <strong>{item.name}</strong>
            </Col>

            <Col xs={6}>
                <ProgressBar max={item.totalHours} now={item.hours}
                    label={`${item.hours}/${item.totalHours}`} />
            </Col>
        </Row>
    }

    function availableItem(item: PlayerAction) {
        return <Row key={item.id} style={{ marginBottom: '0.5em' }}>
            <Col xs={8}>
                <em>{item.name} ({item.totalHours} hours)</em>
            </Col>
            <Col xs={4}>
                <Button block bsSize={'xs'} 
                    onClick={() => props.onStart(item)} >
                Start</Button>
            </Col>
        </Row>
    }
}
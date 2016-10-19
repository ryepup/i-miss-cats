import * as React from 'react'
import { StatsContainer } from './Stats'
import { Player } from './Player'
import { ActionsContainer } from './Actions'
import { Reader } from './Reader'
import { Grid, Row, Col, Nav, NavDropdown, MenuItem, Navbar } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Action, Dispatch } from 'redux'
import { makeNewGameAction } from '../engine/Actions'
import { GameState } from '../engine/GameState'


interface GameProps {
    onNewGame: () => void
}

const mapDispatchToProps = (dispatch:Dispatch<Action>) => {
  return {
    onNewGame: () => dispatch(makeNewGameAction())
  }
}

export const Game = connect(
    (state: GameState) => ({}),
    mapDispatchToProps
    )(render)

function render(props:GameProps) {

    const menuHandler = (k:any) => {
        if(k === 'NEW_GAME') props.onNewGame();
    };

    return <div>
        <Navbar fluid={true}>
            <Nav pullRight onSelect={menuHandler}>
                <NavDropdown title="Options" id="nav-options">
                    <MenuItem eventKey="NEW_GAME">Start a new game</MenuItem>
                </NavDropdown>
            </Nav>
        </Navbar>
        <Grid fluid={true}>
            <Row>
                <Col xs={12}>
                    <StatsContainer />
                </Col>
            </Row>
            <Row>
                <Col xs={4}>
                    <ActionsContainer />
                </Col>
                <Col xs={4}>
                    <Reader />
                </Col>
                <Col xs={4}>
                    <Player />
                </Col>
            </Row>
        </Grid>
    </div>;
}
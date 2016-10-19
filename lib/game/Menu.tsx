import * as React from 'react'
import { Nav, NavDropdown, MenuItem, Navbar } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Action, Dispatch } from 'redux'
import { makeNewGameAction } from '../engine/Actions'
import { GameState } from '../engine/GameState'


interface MenuProps {
    onNewGame: () => void
}

const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
    return {
        onNewGame: () => dispatch(makeNewGameAction())
    }
}

export const Menu = connect(
    (state: GameState) => ({}),
    mapDispatchToProps
)(render)

function render(props: MenuProps) {
    const menuHandler = (k: any) => {
        if (k === 'NEW_GAME') props.onNewGame();
    };
    return <Navbar fluid={true}>
        <Nav pullRight onSelect={menuHandler}>
            <NavDropdown title="Options" id="nav-options">
                <MenuItem eventKey="NEW_GAME">Start a new game</MenuItem>
            </NavDropdown>
        </Nav>
    </Navbar>
}
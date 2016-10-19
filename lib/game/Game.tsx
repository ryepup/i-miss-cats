import * as React from 'react'
import { StatsContainer } from './Stats'
import { Player } from './Player'
import { ActionsContainer } from './Actions'
import { Reader } from './Reader'
import { Grid, Row, Col } from 'react-bootstrap'
import { Menu } from './Menu'

export function Game() {
    return <div>
        <Menu />
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
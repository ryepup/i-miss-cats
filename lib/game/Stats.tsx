import * as React from 'react'
import { connect } from 'react-redux'
import { Ship } from '../engine/interfaces'
import { GameState } from '../engine/GameState';

const mapStateToProps = (state: GameState) => {
  return { ship: state.ship };
}

interface StatsProps{
    ship: Ship
}

export const StatsContainer = connect(mapStateToProps)(Stats)

function Stats(props: StatsProps) {
    return <div>
        <dl className="dl-horizontal">
            <dt>Distance to Earth</dt>
            <dd>{props.ship.distanceToEarth} ly</dd>

            <dt>Speed</dt>
            <dd>{props.ship.speed} kph</dd>

            <dt>Date</dt>
            <dd>{props.ship.date.toISOString()}</dd>

            <dt>Travel Time</dt>
            <dd>{props.ship.travelTime} hours</dd>
        </dl>
    </div>;
}
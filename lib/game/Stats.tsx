import * as React from 'react';

export interface StatsProps {
    date: Date;
    speed: number;
    distanceToEarth: number,
    travelTime: number
}

export function Stats(props: StatsProps) {
    return <div>
        <dl className="dl-horizontal">
            <dt>Distance to Earth</dt>
            <dd>{props.distanceToEarth} ly</dd>

            <dt>Speed</dt>
            <dd>{props.speed} kph</dd>

            <dt>Date</dt>
            <dd>{props.date.toISOString()}</dd>

            <dt>Travel Time</dt>
            <dd>{props.travelTime} hours</dd>
        </dl>
    </div>;
}
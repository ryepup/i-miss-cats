import * as React from 'react';

export interface StatsProps {
    date: Date;
}

export function Stats(props: StatsProps) {
    return <div>
        <dl className="dl-horizontal">
            <dt>Distance to Earth</dt>
            <dd>122231343 ly</dd>

            <dt>Speed</dt>
            <dd>0 kph</dd>

            <dt>Date</dt>
            <dd>{props.date.toISOString()}</dd>

            <dt>Travel Time</dt>
            <dd>0 days</dd>
        </dl>
    </div>;
}
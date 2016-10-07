import * as React from 'react';
import { Link } from 'react-router'

export class Intro extends React.Component<{}, {}> {
    render() {
        return <div>
        <p>INTRO</p>
        <Link to="/play" className="btn btn-default">BEGIN</Link>
        </div>;
    }
}
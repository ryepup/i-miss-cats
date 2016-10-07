import { render } from 'react-dom'
import * as React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import {Layout} from './Layout';
import {Intro} from './Intro';
import {GameContainer} from './game';

export function App() {
    return <Router history={browserHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Intro} />
            <Route path="play" component={GameContainer} />
        </Route>
    </Router>;
}

export function start(selector: string) {
    render(<App />, document.querySelector(selector));
}
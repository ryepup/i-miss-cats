import { render } from 'react-dom'
import * as React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Layout } from './Layout';
import { IntroContainer } from './Intro';
import { Game } from './game';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { store } from './engine'

export function App() {
    return <Router history={browserHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={IntroContainer} />
            <Route path="play" component={Game} />
        </Route>
    </Router>;
}

export function start(selector: string) {
    render(
        <Provider store={store}><App /></Provider>,
        document.querySelector(selector));
}
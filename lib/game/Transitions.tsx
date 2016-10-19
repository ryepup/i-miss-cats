import './transitions.css';
import CSSTransitionGroup = require('react-addons-css-transition-group')
import * as React from 'react';

interface TransitionProps{
    children?:any
}

export function QuickFadeCSSGroup(props:TransitionProps){
    return <CSSTransitionGroup
                transitionName="quick-fade"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}>
            {props.children}
        </CSSTransitionGroup>
}

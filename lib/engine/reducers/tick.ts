import { Action } from 'redux';
import { isTickAction } from '../Actions';

import * as moment from 'moment';
import * as _ from 'lodash';

export const date = (state:Date = new Date(3055, 0, 14), action:Action) => {
    if(!isTickAction(action)) return state;

    return moment(state)
        .add(action.hours, 'hours')
        .toDate();
}

export const travelTime = (state:number = 0, action:Action) => {
    if(!isTickAction(action)) return state;
    return state + action.hours;
}
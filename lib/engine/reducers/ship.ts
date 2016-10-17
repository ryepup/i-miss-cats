import { Action, combineReducers, Reducer } from 'redux';
import { isTickAction } from '../Actions';
import { Ship } from '../interfaces';

import * as moment from 'moment';
import * as _ from 'lodash';

export const date = (state: Date = new Date(3055, 0, 14), action: Action) => {
    if (!isTickAction(action)) return state;

    return moment(state)
        .add(action.hours, 'hours')
        .toDate();
}

export const travelTime = (state: number = 0, action: Action) => {
    if (!isTickAction(action)) return state;
    return state + action.hours;
}

export const speed = (state: number = 0, action: Action) => {
    return state;
}

export const distanceToEarth = (state: number = 30000, action: Action) => {
    return state;
}

export const ship = combineReducers({
    date, travelTime, speed, distanceToEarth
})
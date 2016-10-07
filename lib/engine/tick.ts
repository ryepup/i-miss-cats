import { Action } from 'redux';
import { GameState } from './GameState';
import { Actions } from './Actions';
import * as moment from 'moment';
import * as _ from 'lodash';

export function tick(state: GameState, action: Action): GameState {
    if (action.type !== Actions.TICK) return state;

    var nextDate = moment(state.date).add(1, 'days');

    return _.assign({}, state, {
        date: nextDate.toDate(),
        travelTime: state.travelTime + 1
    });
}
import { PlayerAction, Identified, actionId } from './interfaces'
import * as _ from 'lodash'

abstract class PlayerActionBase implements PlayerAction {
    hours: number
    constructor(
        readonly id: actionId,
        readonly name: string,
        readonly totalHours: number,
        readonly prereqs: actionId[] = []
    ) {
        this.hours = 0;

    }
}

export class Reading extends PlayerActionBase {
    constructor(id: actionId,
        name: string,
        totalHours: number,
        prereqs: actionId[] = []) {
        super(id, name, totalHours, prereqs)
    }
}

export class ShipOperation extends PlayerActionBase {
    constructor(id: actionId,
        name: string,
        totalHours: number,
        prereqs: actionId[] = []) {
        super(id, name, totalHours, prereqs)
    }
}

export const rootAction = new Reading('ROOT', 'Stay on the ship', 0)

const allActions: PlayerActionBase[] = [
    new ShipOperation('SRCH-0', 'search the ship', 4),
    new Reading('MAN-0', 'Read J93 Seed Ship quickstart manual', 8, ['SRCH-0']),
    new Reading('MAN-1', 'Read J93 Seed Ship reactor manual', 60, ['SRCH-0']),
    new Reading('MAN-2', 'Read J93 Seed Ship computer manual', 60, ['SRCH-0']),
    new ShipOperation('QUEUE-0', 'Mount a whiteboard', 1, ['SRCH-0']),
    new ShipOperation('POWER-0', 'power up the ship', 16, ['MAN-0', 'MAN-1'])
]

export function findAction(action: Identified): PlayerAction {
    return _.find(allActions, x => x.id === action.id)
}

export function findAvailable(completed: Identified[] = [], active: Identified[] = []): PlayerAction[] {
    const ineligible = _.union(completed, active).map(x => x.id);
    const completedIds = completed.map(x => x.id);

    return allActions
        .filter(x => !_.includes(ineligible, x.id))
        .filter(x => hasPrereqsMet(x, completedIds))
}

function hasPrereqsMet(action: PlayerAction, ids: actionId[]): boolean {
    return action
        && action.prereqs
        && action.prereqs.every(x => _.includes(ids, x))
        || false;
}
import { PlayerAction, Identified } from './GameState'
import * as _ from 'lodash';

abstract class PlayerActionBase implements PlayerAction {
    hours: 0
    constructor(
        readonly id: string | number,
        readonly name: string,
        readonly totalHours: number,
        readonly prereqs: (string | number)[] = []
    ) { }

    hasPrereqsMet(ids: (string | number)[]): boolean {
        return this.prereqs.every(x => _.includes(ids, x))
    }
}

export class Reading extends PlayerActionBase {
    constructor(id: string | number,
        name: string,
        totalHours: number,
        prereqs: (string | number)[] = []) {
        super(id, name, totalHours, prereqs)
    }
}

export class ShipOperation extends PlayerActionBase {
    constructor(id: string | number,
        name: string,
        totalHours: number,
        prereqs: (string | number)[] = []) {
        super(id, name, totalHours, prereqs)
    }
}

const allActions: PlayerActionBase[] = [
    new Reading(0, 'Read the manual', 30),
    new Reading(1, 'Read the manual again', 30, [0]),
    new ShipOperation(2, 'power up the ship', 16, [1])
]

export function findAction(action: Identified): PlayerAction {
    return _.find(allActions, x => x.id === action.id)
}

export function findAvailable(completed: Identified[] = [], active: Identified[] = []): PlayerAction[] {
    const ineligible = _.union(completed, active).map(x => x.id);
    const completedIds = completed.map(x => x.id);

    return allActions
        .filter(x => !_.includes(ineligible, x.id))
        .filter(x => x.hasPrereqsMet(completedIds))
}
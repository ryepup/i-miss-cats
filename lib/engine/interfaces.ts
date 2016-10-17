export type actionId = string | number;

export interface Identified {
    readonly id: actionId
}

export interface PlayerAction extends Identified {
    readonly name: string
    readonly totalHours: number
    hours: number
    readonly prereqs?: actionId[]
}

export interface PlayerActions {
    active: PlayerAction[]
    available: PlayerAction[]
    completed: PlayerAction[]
}

export interface Ship {
    date: Date
    speed: number
    distanceToEarth: number
    travelTime: number
}
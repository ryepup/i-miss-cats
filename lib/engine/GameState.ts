export interface Identified {
    id: string | number
}

export interface PlayerAction extends Identified {
    name: string
    totalHours: number
    hours: number
    prereqs?: (string | number)[]
}

export interface GameState {
    date: Date
    speed: number
    distanceToEarth: number
    travelTime: number
    actions: PlayerAction[]
    availableActions: PlayerAction[]
    completedActions: PlayerAction[]
    hoursPerTick: number
}
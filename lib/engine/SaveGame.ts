import { GameState } from './GameState'

const key = 'I-MISS-CATS-STATE'

export function load(): GameState|undefined {
    const json = localStorage.getItem(key);
    return json && JSON.parse(json, reviver) || undefined;
}

function reviver(key: string, value: any) {
    if ((/date/i).test(key)) {
        return new Date(value);
    }
    return value;
}

export function save(state?: GameState) {
    if (state) {
        const json = JSON.stringify(state);
        localStorage.setItem(key, json);
    }
}
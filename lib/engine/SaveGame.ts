import { GameState } from './GameState'

const key = 'I-MISS-CATS-STATE'

export function load(): GameState {
    const json = localStorage.getItem(key);
    return json && JSON.parse(json, reviver) || {};
}

function reviver(key:string, value:any){
    if((/date/i).test(key)){
        return new Date(value);
    }
    return value;
}

export function save(state: GameState) {
    const json = JSON.stringify(state);
    localStorage.setItem(key, json);
}
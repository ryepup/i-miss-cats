import {render} from 'react-dom'
import * as React from 'react'; // need for react-dom

export function App(){
    return <div>I MISS CATS</div>
}

export function start(selector:string){
    render(<App />, document.querySelector(selector));
}
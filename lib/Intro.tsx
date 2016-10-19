import * as React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { Action, Dispatch } from 'redux'
import { makeBeginAction } from './engine/Actions'
import { GameState } from './engine/GameState'

const mapDispatchToProps = (dispatch:Dispatch<Action>) => {
  return {
    onStart: () => dispatch(makeBeginAction())
  }
}

export const IntroContainer = connect(
    (state: GameState) => ({}),
    mapDispatchToProps
    )(Intro)

interface IntroProps {
    onStart: () => void
}

function Intro(props:IntroProps){
    return <div>
            <p>
                The last landing pod was ready. Eight seats for the last eight travelers. The trip had been long, a centuries-long dreamless sleep for a thousand human refugees. The nuclear reactor and main computer had guided the colony ship through hundreds of light years of dead space, searching for a compatible world. A skeleton crew had been awoken as needed and spent short, tortured lives resolving desperate catastrophes.
</p><p>
                The ship finally found a suitable planet; a long sought new home for this small, optimistic branch of humanity.
</p><p>
                The ship itself was mostly cannabalized in the landing process. All that remained was a brittle spider of steel dwafing a tiny radioactive abdomen. One last landing pod dangled off the tip of an aluminum fang.
</p><p>
                Eight seats for the last eight travelers. Seven were seated and waiting impatiently for the fall home.
</p><p>
                I paused.
</p><p>
                My seat looked comfortable, the straps strong. I looked back down the hallway, towards the leaking reactor, the remnants of the computer, almost certain death, and the tatters of a "hang in there kitty" poster.
</p>
            <blockquote>
                <p>
                    Take your seat, it's time.
                </p>
            </blockquote>
            <p>
                I stopped.
</p><blockquote><p>
                No, sir, I'm going back.
</p></blockquote><blockquote><p>
                Back? But why?
</p></blockquote><p>
                The door closed. The pod slowly dipped down, my seat forever empty. I couldn't answer until the pod was out of view.
</p><blockquote><p>
                I miss cats
</p></blockquote>
            <div className="pull-right">
                <Link to="/play" className="btn btn-default"
                    onClick={props.onStart}>BEGIN</Link>
            </div>
        </div>;
}
import * as React from 'react';
import { connect } from 'react-redux'
import { GameState } from '../engine/GameState';
import { PlayerAction } from '../engine/interfaces'
import { Converter } from 'showdown';

const mapStateToProps = (state: GameState) => {
    return {
        content: state.content,
        lastComplete: state.actions.lastComplete
    };
}

interface ReaderProps {
    content?: string,
    lastComplete: PlayerAction
}

export const Reader = connect(mapStateToProps)(render)

function render(props: ReaderProps) {
    var converter = new Converter();
    var content = {
        __html: converter.makeHtml(props.content || "")
    };
    return <div>
        <h4>Finished <em>{props.lastComplete.name}</em></h4>
        <div dangerouslySetInnerHTML={content}>
        </div>
    </div>;
}
import * as React from 'react';

export interface IntroProps { children: any; }

export class Layout extends React.Component<IntroProps, {}> {
    render() {
        return <div className="i-miss-cats">
            {this.props.children}
        </div>;
    }
}
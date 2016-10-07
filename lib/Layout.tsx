import * as React from 'react';

export interface IntroProps { children: any; }

export class Layout extends React.Component<IntroProps, {}> {
    render() {
        return <div className="container-fluid">
            <div className="row">
                <div className="col-xs-12">
                    {this.props.children}
                </div>
            </div>
        </div>;
    }
}
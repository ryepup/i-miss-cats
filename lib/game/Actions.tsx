import * as React from 'react';

export function Actions() {
    return <div>
        <h4>Actions</h4>

        <div>
            <strong>Reading Book 1</strong>
            <div className="pull-right">
                <div className="btn-group btn-group-sm">
                    <button type="button" className="btn btn-default"
                    disabled={true}>
                        <span className="glyphicon glyphicon-arrow-up"></span>
                    </button>
                    <button type="button" className="btn btn-default">
                                            <span className="glyphicon glyphicon-arrow-down"></span>
                    </button>
                </div>
            </div>
            <div className="clearfix"></div>
            <div className="progress">
                <div className="progress-bar" style={{ width: '60%' }}>
                    60/100
                </div>
            </div>
        </div>
        <div>
            <strong>Reading Book 2</strong>
            <div className="pull-right">
                <div className="btn-group btn-group-sm">
                    <button type="button" className="btn btn-default">
                        <span className="glyphicon glyphicon-arrow-up"></span>
                    </button>
                    <button type="button" className="btn btn-default">
                                            <span className="glyphicon glyphicon-arrow-down"></span>
                    </button>
                </div>
            </div>
            <div className="clearfix"></div>
            <div className="progress">
                <div className="progress-bar" style={{ width: '60%' }}>
                    20/100
                </div>
            </div>
        </div>

        <h4>Available soon</h4>
        <div>
            <em>Reading book 3</em>
        </div>
    </div>;
}
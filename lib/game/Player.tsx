import * as React from 'react';

export function Player() {
    return <div>
        <h4>Skills</h4>
        <div>
            <strong>Astronomy</strong>
            <div className="pull-right">Level 4</div>
            <div className="progress">
                <div className="progress-bar" style={{ width: '60%' }}>
                    60/100
                </div>
            </div>
        </div>
        <div>
            <strong>Anatomy</strong>
            <div className="pull-right">Level 1</div>
            <div className="progress">
                <div className="progress-bar" style={{ width: '50%' }}>
                    5/10
                </div>
            </div>
        </div>

        <h4>Inventory</h4>
        <ol>
            <li>Item 1 <button>Use</button></li>
        </ol>
    </div>;
}
import React from 'react';

const moment = require('moment');

function TimeViewer() {
    return (
        <span style={{right: 0, top: 0}} className="text-muted position-absolute t-secondary pr-4 pt-2 font-weight-bold" >{moment().format('ddd DD MMM h:mm a')}</span>
    );
}

export default TimeViewer;

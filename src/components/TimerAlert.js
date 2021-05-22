import React from 'react';
import InformatioIcon from './layout/assets/information.svg';

function TimeAlert() {
    return (
        <div className="cbt-timer-alert">
            <img style={{width: 14}} className="mr-2" src={InformatioIcon} alt="cbt-info" />
            <span>Exam will start in: 08:00 min</span>
        </div>
    );
}

export default TimeAlert;

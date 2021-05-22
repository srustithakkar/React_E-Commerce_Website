import React from 'react';
import ControlPanel from './ControlPanel';
import TimeAlert from '../TimerAlert';


function Layout(props) {
    const {children} = props;
    return (
        <div className="d-flex flex-column position-relative h-100">
            <TimeAlert />
            <div className="d-flex flex-column h-100">
                <ControlPanel />
                <div className="d-flex flex-column h-100">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout;
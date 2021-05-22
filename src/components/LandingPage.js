import React from 'react';
import TimeViewer from './TimeViewer';
import {useHistory} from 'react-router-dom';


function LandingPage() {
    const history = useHistory();
    const handleContinueClick = (ev) => {
        ev.stopPropagation();
        history.push("user_preference");
    };
    return (
        <div className="d-flex h-100 justify-content-center align-item-center position-relative">
            <TimeViewer />
            <div className="text-center align-self-center">
                <p className="m-0 display-3 font-weight-400" >Computer No.</p>
                <p className="m-0 display-1" >26</p>
                <button onClick={handleContinueClick} type="button" class="btn btn-outline-dark">Continue</button>
            </div>
        </div>
    );
}

export default LandingPage;
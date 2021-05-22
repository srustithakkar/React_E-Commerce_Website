import React from 'react';
import TimeViewer from '../TimeViewer';
import SettingsIcon from './assets/gear.svg';


function ControlPanel() {
    return (
        <div className="container-fluid position-relative border-bottom">
            <TimeViewer/>
            <div className="row">
                <div className="col-12">
                    <div className="ghotst-div" />
                </div>
                <div className="col-6">
                    <span className="display-4 font-weight-bold">Select Mouse Preference</span>
                </div>
                <div className="col-6 text-right mt-3">
                    <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
                        <button type="button" className="btn btn-primary">English</button>
                        <button type="button" className="btn btn-outline-dark">हिंदी</button>

                        <div className="btn-group" role="group">
                            <button id="btnGroupDrop1" type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            </button>
                            <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                <a className="dropdown-item" href="#">Some text goes here</a>
                                <a className="dropdown-item" href="#">Some text goes here</a>
                            </div>
                        </div>
                    </div>
                    <button className=" ml-4 btn btn-outline-dark"><img style={{width: 25, padding: 2}} src={SettingsIcon} alt="cbt=settings" /></button>
                </div>
            </div>
        </div>
    )
}

export default ControlPanel;
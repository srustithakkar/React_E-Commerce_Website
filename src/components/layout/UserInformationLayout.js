import React from 'react';
import ImageSuraj from './assets/suraj.jpg';

function UsserInformation () {
    return (
        <div className="d-flex h-100 justify-content-center align-item-center position-relative">
            <div className="align-self-center">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="card shadow-sm">
                                <div className="card-body text-left">
                                    <div className="d-flex flex-row">
                                       <div className="p-4">
                                            <img style={{width: 200}} className="rounded mx-auto d-block" src={ImageSuraj} alt="suraj"/>
                                       </div>
                                       <div className="d-flex flex-column">
                                            <div className="d-flex flex-row">
                                                <span className="h3 font-weight-bold">Name:</span><span className="h3 ml-2">Suraj Shukla</span>
                                            </div>
                                            <div className="d-flex flex-row">
                                                <span className="h4 font-weight-bold">ID:</span><span className="h4 ml-2">05051995</span>
                                            </div>
                                            <div className="d-flex flex-row">
                                                <span className="h4 font-weight-bold">Computer No:</span><span className="h4 ml-2">26</span>
                                            </div>
                                       </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UsserInformation;
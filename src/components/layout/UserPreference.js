import React from 'react';
import Preference from './Preference';
import Mouse from './assets/mouse_comp.svg';


function UserPreference() {
    const handleContinueClick = () =>  null
    return (
        <div className="d-flex h-100 justify-content-center align-item-center position-relative">
            <div className="align-self-center">
                <div className="text-center">
                    <Preference />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="card bg-dark shadow-sm">
                                <div className="card-body text-left">
                                    <div className="d-flex flex-row">
                                    <img className="cbt-mouse-img mr-4" src={Mouse} alt="mouse-img" />
                                    <span className="text-white">
                                        {`Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
                                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                        It has survived not only five centuries,`}
                                    </span>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center col-12 mt-4">
                                <button onClick={handleContinueClick} type="button" class="btn btn-outline-dark">Continue</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserPreference;

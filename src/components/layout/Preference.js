import React, {useState} from 'react';
import RightHandPreferenceIcon from './assets/mouse.svg';

function Preference() {
    const [preference, setPreferece] = useState("left");
    return (
        <div className="d-flex flex-row justify-content-center">
            <div className="form-check">
                <div className="d-flex flex-column">
                    <p><input className="form-check-input" type="radio" name="mouse-preference" id="radio-btn-1" value="left" checked={preference === "left"} onClick={(ev) => setPreferece(ev.target.value)} /></p>
                    <img class="m-auto" style={{width: 200, transform: 'scaleX(-1)'}} src={RightHandPreferenceIcon} alt="cbt-left-hand-logo" />
                </div>
            </div>
            <div className="form-check">
                <div className="d-flex flex-column">
                    <p><input className="form-check-input" type="radio" name="mouse-preference" id="radio-btn-2" value="right" checked={preference === "right"}  onClick={(ev) => setPreferece(ev.target.value)} /></p>
                    <img class="m-auto" style={{width: 200}} src={RightHandPreferenceIcon} alt="cbt-right-hand-logo" />
                </div>
            </div>
        </div>
    )
}

export default Preference;

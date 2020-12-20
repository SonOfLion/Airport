import React from 'react';

import '../mainboard/buttons.scss';

const LIGHT_BLUE = '#73CBFA';

const Buttons = () => {

    return (
        <div className="container">
            <button className="btn__departures" >
                <i className="fas fa-plane-departure"></i>
                <span className="btn__departures-title">DEPARTURES</span>
            </button>
            <button className="btn__arrivals">
                <i className="fas fa-plane-arrival"></i>
                <span className="btn__arrivals-title">ARRIVALS</span>
            </button>
        </div>
    )   
}

export default Buttons;
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { showFlightDirection } from '../searchform/flightSelectors';

import '../searchform/searchform.scss';

const SearchForm = () => {
    const [searchInfo, setSearchInfo] = useState('');


    
    return (
        <div className="search__section">
            <h1 className="search__section-title">SEARCH FLIGHT</h1>

            <div className="search__section-container">

                <div action="search__section-title-container-form">
                    <i className="fas fa-search"></i>
                    <input className="search__section-input" 
                        placeholder="Airline, destination or flight #"
                        value={searchInfo}
                        onChange={}
                        type="text"
                    >
                    </input>

                    <button className="search__section-input-btn">
                        <span className="search__section-input-btn-text">SEARCH</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

const mapState = (state) => {
    return {
        direction: showFlightDirection(state),
    };
};

export default connect(mapState)(SearchForm);
/**
 * React Imports
 */

import React, {Component} from 'react';

/**
 * @class SearchBox
 * @description Search data
 */
class SearchBox extends Component {
    /**
     * @param {Object} props
     */
    constructor(props) {
    super(props);

    this.state = {};
    }

    /**
     * @description Render callback
     * @return {Object}
     */
    render() {
        return (
            /** SEARCH BOX COMPONENT START **/
            <div className="search-box-component">
                
                {/* SEARCH BUTTON CTA START  */}
                <div className="search-form-container">
                    <img className="arrow-icon" />
                    <form className="search-form">
                        <label className="heading">
                            Find your artist below
                        </label>
                        <button
                        className="button-cta-green search-btn"
                        type="submit">
                            Search Artist
                        </button>
                    </form>
                </div>
                {/* SEARCH BUTTON CTA END  */}

                {/* POPUP SEARCH FORM START */}
                <div className="popup-box-container">
                    <div className="popup-box">
                        <div className="form-heading">
                            <p>Enter Search Criteria</p>
                            <span>&#10005;</span>
                        </div>
                        <form className="search-container">
                            <div className="input-container">
                                <label>Artist Name</label>
                                <input type="text" className="input-field" />
                            </div>
                            <div className="input-container">
                                <label>No. of tracks</label>
                                <input
                                    type="number"
                                    min="0"
                                    className="input-field"
                                />
                            </div>
                            <div className="input-container btn-container">
                                <button type="submit" className="btn-search button-cta-green">
                                    Search
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                {/* POPUP SEARCH FORM END */}

            </div>
            /** SEARCH-BOX-COMPONENT-END **/
        );
    }
}

export default SearchBox;

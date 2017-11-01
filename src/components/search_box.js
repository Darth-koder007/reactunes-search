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
            <div className="search-form-container">
                <img className="arrow-icon" />
                <form className="search-form">
                    <label className="heading">Find your artist below</label>
                    <button className="button-cta-green search-btn" type="submit">
                        Search Artist
                    </button>
                </form>
                {/* <div>
                    <input type="text" />
                </div> */}
            </div>
        );
    }
}

export default SearchBox;

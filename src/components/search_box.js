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

        this.onSearch = this.onSearch.bind(this);
        this.handleUserInput = this.handleUserInput.bind(this);
        this.validateField = this.validateField.bind(this);
        this.validateForm = this.validateForm.bind(this);
        this.showForm = this.showForm.bind(this);
        this.resetForm = this.resetForm.bind(this);

        this.state = {
            term: null,
            limit: null,
            termValid: false,
            limitValid: false,
            formValid: false,
            formSubmitted: false
        };
    }

    onSearch(e) {
        e.preventDefault();
        this.setState({formSubmitted: true});
        if (this.state.formValid) {
            this.props.onSearch(this.state);
        }
    }

    handleUserInput (e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value});
        this.validateField(name, value);
        this.setState({formSubmitted: false});        
    }

    validateField(fieldName, value) {
        let termValid = this.state.termValid;
        let limitValid = this.state.limitValid;

        switch(fieldName) {
        case 'term':
            termValid = /(jack)/i.test(value);
            break;
        case 'limit':
            limitValid = /(4{1})/.test(value);
            break;
        default:
            break;
        }

        this.setState(
            {
                termValid: termValid,
                limitValid: limitValid
            }, 
            this.validateForm
        );
    }

    validateForm() {
        this.setState({formValid: this.state.limitValid && this.state.termValid});
    }

    resetForm() {
        this.setState({
            term: null,
            limit: null,
            termValid: false,
            limitValid: false,
            formValid: false,
            formSubmitted: false
        });

        document.querySelector('.popup-box-container').style = 'display:none';
    }

    showForm(e) {
        e.preventDefault();
        document.querySelector('.popup-box-container').style = 'display:flex';
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
                    <form className="search-form" onSubmit={this.showForm}>
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
                            <span onClick={this.resetForm}>&#10005;</span>
                        </div>
                        <form className="search-container" onSubmit={this.onSearch}>
                            <div className="input-container">
                                <label>Artist Name</label>
                                <div className="input-field-container">
                                    <input type="text" className="input-field" onInput={this.handleUserInput} name="term" />
                                    {
                                        this.state.formSubmitted && !this.state.termValid ? 
                                        (<p className="error">Invalid Input</p>) : ''
                                    }
                                </div>
                            </div>
                            <div className="input-container">
                                <label>No. of tracks</label>
                                <div className="input-field-container">
                                    <input
                                        type="number"
                                        min="0"
                                        className="input-field"
                                        onInput={this.handleUserInput}
                                        name="limit"
                                    />
                                    {
                                        this.state.formSubmitted && !this.state.limitValid ? 
                                        (<p className="error">Invalid Input</p>) : ''                                   
                                    }
                                </div>
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

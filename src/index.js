/**
 * Import vendor modules
 */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

/**
 * Import custom components
 */
import SearchBox from './components/search_box';
import SearchResultList from './components/search_result_list';
import styles from '../style/style.scss';

/**
 * @description Main App class
 */
export class APP extends Component {

  /**
   * @description constructor function
   * @param {Object} props
   */
  constructor(props) {
    super(props);

    this.searchRequest = this.searchRequest.bind(this);
    this.clearResults = this.clearResults.bind(this);

    this.state = {
      results: [],
      term: ''
    };
  }

  /**
   * Initiate search request and update state
   * @param  {String} term [search term]
   */
  searchRequest({term, limit}) {
    const URL = `https://itunes.apple.com/search?term=${term}&limit=${limit}`;
    this.setState({
      results: [],
      term: term
    });

    if(term) {
      fetch(URL, {
        method: 'GET'
      })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (response && response.results) {
          this.setState({results: response.results});
        }
      });
    }
  }

  /**
   * Empty results
   */
  clearResults() {
    this.setState({results: []});
  }

  /**
   * Creates a new component.
   * It should produce some html
   * @return {String}
   */
  render() {
    return (
      <div className="container-main">
        {
          this.state.results.length > 0 ?
          (
            <SearchResultList 
              results={this.state.results}
              clearResults={this.clearResults}
              term={this.state.term}
            />
          ) 
          : 
          (
            <SearchBox 
              onSearch={this.searchRequest}
            />
          )
        }
      </div>
    );
  }
};

ReactDOM.render(<APP />, document.querySelector('.container'));

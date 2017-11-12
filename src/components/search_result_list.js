/**
 * React Imports
 */

import React, { Component } from 'react';

 /**
  * Search result list class
  */

  class SearchResultList extends Component {
      constructor(props) {
        super(props);

        this.state = {};
      }

      render() {
          return (
              <div className="search-list-container">
                <div className="heading-container">
                    <p className="heading">Search results for "Jack". <span>( clear )</span></p>
                </div>
                <ul className="search-results-list">
                    <li className="list-item">
                        <div className="list-item-container">
                            <img src="http://via.placeholder.com/150x150" />
                            <div className="details-container">
                                <p className="heading">Artist name: Francis Ford coppolla</p>
                                <p className="heading">Track name: Jack</p>
                                <p className="sub-heading">
                                    Deserunt Lorem laboris magna id nostrud culpa anim labore ea non adipisicing do. Anim in duis minim nisi quis commodo duis do quis. 
                                    Enim occaecat sint nulla minim sint dolor reprehenderit excepteur sint nisi sint. Labore sit veniam elit sint. Commodo non Lorem 
                                    proident tempor esse culpa. Ex ipsum incididunt nulla ex Lorem laboris anim ea.
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className="list-item">
                        <div className="list-item-container">
                            <img src="http://via.placeholder.com/150x150" />
                            <div className="details-container">
                                <p className="heading">Artist name: Francis Ford coppolla</p>
                                <p className="heading">Track name: Jack</p>
                                <p className="sub-heading">
                                    Deserunt Lorem laboris magna id nostrud culpa anim labore ea non adipisicing do. Anim in duis minim nisi quis commodo duis do quis. 
                                    Enim occaecat sint nulla minim sint dolor reprehenderit excepteur sint nisi sint. Labore sit veniam elit sint. Commodo non Lorem 
                                    proident tempor esse culpa. Ex ipsum incididunt nulla ex Lorem laboris anim ea.
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
              </div>
          );
      }
  }

  export default SearchResultList;
  
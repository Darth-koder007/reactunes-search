/**
 * Import bootstrap components
 */
import React, {Component} from 'react';

/**
 * Search List Item class
 */
class SearchListItem extends Component {
  /**
   * constructor
   * @param  {Object} props
   */
  constructor(props) {
    super(props);
  }

  /**
  * render component
   * @return {String}
   */
  render() {

    return(
        <li className="list-item">
            <div className="list-item-container">
                <img src={this.props.artworkUrl100} />
                <div className="details-container">
                    <p className="heading">Artist name: {this.props.artistName}</p>
                    <p className="heading">Track name: {this.props.trackName}</p>
                    <p className="sub-heading">{this.props.shortDescription}</p>
                </div>
            </div>
        </li>
    );
  }
}

export default SearchListItem;

/**
 * Import vendor modules
 */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
// import YTSearch from 'youtube-api-search';

/**
 * Import custom components
 */
// import SearchBar from './components/search_bar';
// import VideoList from './components/video_list';
// import VideoDetail from './components/video_detail';
import SearchBox from './components/search_box';
import SearchResultList from './components/search_result_list';
import styles from '../style/style.scss';


/**
 * Youtube search apikey
 * @type {String}
 */
// const API_KEY = 'AIzaSyBO2d_PYJ3aYobvnCa3naUmM3YJzn6pefE';
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

    // this.searchYoutube = this.searchYoutube.bind(this);
    // this.changeSelectedVideo = this.changeSelectedVideo.bind(this);
    this.state = {
      // videos: [],
      // selectedVideo: null
    };
  }

  // searchYoutube(term) {
  //   YTSearch({key:API_KEY, term: term}, (data) => {
  //     this.setState({
  //         videos: data,
  //         selectedVideo: data[0]
  //     });
  //   });
  // }

  // changeSelectedVideo(video) {
  //   this.setState({ selectedVideo: video });
  // }

  /**
   * Creates a new component.
   * It should produce some html
   * @return {String}
   */
  render() {
    return (
      <div className="container-main">
        {/* <SearchBar onSearchInput={this.searchYoutube} /> */}
        {/* {
          this.state.videos.length > 0
          ?
          (
            <div className="wrapper grouping">
              <VideoDetail selectedVideo={this.state.selectedVideo}/>
              <VideoList
                videos={this.state.videos}
                selectVideo={this.changeSelectedVideo}
              />
            </div>
          )
          :
          (
            <div className="loader">Loading...</div>
          )
        } */}

        {/* <SearchBox /> */}
        <SearchResultList />
      </div>
    );
  }
};

ReactDOM.render(<APP />, document.querySelector('.container'));

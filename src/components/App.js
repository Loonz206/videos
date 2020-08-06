import React, { Component } from "react";
import SearchBar from "../components/SearchBar";
import VideoList from '../components/VideoList';
import youtube from '../api/youtube';

class App extends Component {
  constructor(){
    super();
    this.state = { videos: []}
  }

  onTermSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });
    const { data } = response;
    this.setState({videos: data.items})
  };

  render() {
    const { videos } = this.state;
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onTermSubmit}/>
        <VideoList videos={videos}/>
      </div>
    );
  }
}

export default App;

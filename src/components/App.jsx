import React, { Component } from "react";
import SearchBar from "./Searchbar";
import youtube from "../apis/youtube";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  onTermSubmit = term => {
    youtube.get("/search", {
      params: {
        q: term
      }
    });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
      </div>
    );
  }
}

export default App;

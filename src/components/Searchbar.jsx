import React, { Component } from "react";
import PropTypes from "prop-types";

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      term: ""
    };
  }

  onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = event => {
    const { onFormSubmit } = this.props;
    const { term } = this.state;
    event.preventDefault();
    onFormSubmit(term);
  };

  render() {
    const { term } = this.state;
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} action="" className="ui form">
          <div className="field">
            <label htmlFor="searchbar">
              Video Search
              <input
                id="searchbar"
                type="text"
                value={term}
                onChange={this.onInputChange}
              />
            </label>
          </div>
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  onFormSubmit: PropTypes.func.isRequired
};

export default SearchBar;

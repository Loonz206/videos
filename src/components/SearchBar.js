import React, { useState } from "react";
import PropTypes from "prop-types";

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(term);
  };

  return (
    <div className="searchbar ui segment">
      <form action="" className="ui form" onSubmit={onSubmit}>
        <div className="field">
          <label htmlFor="">
            Video Search
            <input
              type="text"
              value={term}
              onChange={(event) => setTerm(event.target.value)}
            />
          </label>
        </div>
      </form>
    </div>
  );
};

SearchBar.propTypes = {
  onFormSubmit: PropTypes.func,
};

export default SearchBar;

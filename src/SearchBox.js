import React from "react";

const SearchBox = function ({ searchfield, searchChange }) {
  return (
    <div className="SearchBox">
      <input
        className="box"
        type="search"
        placeholder="Search by Pokemon"
        onChange={searchChange}
      />

    </div>
  );
};

export default SearchBox;

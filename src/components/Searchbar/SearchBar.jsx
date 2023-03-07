import React, { useState } from "react";

const SearchBar = ({ handleSubmit }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    const val = e.target.value;
    setQuery(val);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(query);
    setQuery("");
  };
  return (
    <div className="SearchBar">
      <form className="SearchForm" onSubmit={onSubmit}>
        <button className="SearchForm-button" type="submit"></button>
        <input
          onChange={handleChange}
          value={query}
          className="SearchForm-input"
          type="text"
          placeholder="Search movies"
        />
      </form>
    </div>
  );
};

export default SearchBar;

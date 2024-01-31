import React from "react";
import "./main.css";
import { IoSearchOutline } from "react-icons/io5";

const SearchBar = () => {
  return (
    <div className="search-container">
      <input type="text" className="search-input" placeholder="   검색" />
      <button className="search-button">
        <IoSearchOutline className="search-icon" />
      </button>
    </div>
  );
};

export default SearchBar;

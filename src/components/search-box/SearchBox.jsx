import React, { Component } from "react";
import "./search-box.styles.css";
const SearchBox = ({ onChangeHandler, placeholder, className }) => (
  <input className={className} type="search" placeholder={placeholder} onChange={onChangeHandler} />
);

export default SearchBox;

import React from "react";
import classes from "./ChatSearchBar.module.css";

function SearchBar() {
  return (
    <input type="text" placeholder="Search" className={classes.searchBar}/>
  )
}

export default SearchBar;
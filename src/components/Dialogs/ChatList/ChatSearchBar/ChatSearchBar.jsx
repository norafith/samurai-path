import React from "react";
import classes from "./ChatSearchBar.module.css";

function SearchBar(props) {
  const searchRef = React.createRef();

  function inputHandler() {
    let text = searchRef.current.value;
    props.changeSearchText(text);
  }
  
  return (
    <input
      ref={searchRef}
      type="text" 
      value={props.searchText} 
      className={classes.searchBar} 
      onChange={inputHandler}  
    />
  )
}

export default SearchBar;
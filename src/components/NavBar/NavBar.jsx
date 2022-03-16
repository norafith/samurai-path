import React from "react";
import classes from "./NavBar.module.css";
import NavOption from "./NavOption/NavOption";
import { changeNavBarOpenedStatusActionCreator } from "../../redux/navBarReducer";

function NavBar(props) {
  const navElements = props.store.getState().navBar.sectionList.map(option => <NavOption name={option} /> )
  const navRef = React.createRef();

  let navBarClass = classes.navbar;
  if (props.store.getState().navBar.mobileStatus) {
    navBarClass += " " + classes.mobile;
  }

  if (props.store.getState().navBar.openedStatus) {
    navBarClass += " " + classes.active;
  }
	
	return (
    <nav ref={navRef} className={navBarClass}>
      <div onClick={props.store.dispatch.bind(props.store, changeNavBarOpenedStatusActionCreator())} className={classes.closeBtn}>X</div>
      <ul className={classes.menu}> 
        {navElements}
      </ul>
    </nav>
  );
}

export default NavBar;
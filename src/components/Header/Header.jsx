import React from "react";
import classes from "./Header.module.css"
import logo from "./logo.png"
import { changeNavBarOpenedStatusActionCreator } from "../../redux/navBarReducer";

function Header(props) {
	let headerClass = classes.header;
	
	if (props.store.getState().navBar.mobileStatus) {
		headerClass += " " + classes.mobile;
	}
	
	let menuBtnDisplay;
	if (props.store.getState().navBar.mobileStatus) {
		menuBtnDisplay = "block";
	} else {
		menuBtnDisplay = "none";
	}
	
  return (
    <header className={headerClass}>
      <div className={classes.menuBtn} onClick={props.store.dispatch.bind(props.store, changeNavBarOpenedStatusActionCreator())} style={{display: menuBtnDisplay}}>Menu</div>
			<img className={classes.logo}
        src={logo}
				alt="site logo"
      />
    </header>
  );
}

export default Header;
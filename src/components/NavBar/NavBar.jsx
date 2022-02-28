import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./NavBar.module.css";


function NavBar() {
  return (
    <nav className={classes.navbar}>
      <ul className={classes.menu}>
        <li><NavLink to="/profile"  className={(navData) => navData.isActive ? classes.active : "" }>Profile</NavLink></li>
        <li><NavLink to="/dialogs" className={(navData) => navData.isActive ? classes.active : "" }>Dialogs</NavLink></li>
        <li><NavLink to="/friends" className={(navData) => navData.isActive ? classes.active : "" }>Friends</NavLink></li>
        <li><NavLink to="/news" className={(navData) => navData.isActive ? classes.active : "" }>News</NavLink></li>
        <li><NavLink to="/music" className={(navData) => navData.isActive ? classes.active : "" }>Music</NavLink></li>  
        <li className={classes.settings}><NavLink to="/settings">Settings</NavLink></li>
      </ul>
    </nav>
  );
}

export default NavBar;
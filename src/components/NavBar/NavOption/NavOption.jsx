import React from "react";
import classes from "./NavOption.module.css";
import { NavLink } from "react-router-dom";

function NavOption(props) {

  return (
    <li className={props.name === "Settings" ? classes.settings : ""}><NavLink to={`/${props.name.toLowerCase()}`} className={(navData) => navData.isActive ? `${classes.navOption} ${classes.active}` : classes.navOption }>{props.name}</NavLink></li>
  )
}

export default NavOption;
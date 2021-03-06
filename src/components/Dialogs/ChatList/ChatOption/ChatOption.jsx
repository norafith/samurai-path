import React from "react";
import classes from "./ChatOption.module.css"
import userImg from "../../../../assets/user.png";
import { NavLink } from "react-router-dom";

function ChatOption(props) {
  return (
    <NavLink to={`/dialogs/${props.userID}`} className={(navData) => navData.isActive ? `${classes.active} ${classes.chatOption}` : classes.chatOption }>
      <img className={classes.userLogo} src={userImg} alt="user logo"/>
      <span className={classes.username}>{props.name}</span>
    </NavLink>
  )
}

export default ChatOption;
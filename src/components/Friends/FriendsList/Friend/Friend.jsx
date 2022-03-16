import React from "react";
import classes from "./Friend.module.css";
import logo from "./user.png"

function Friend(props) {
  let onlineStatusClass = classes.onlineStatus;
  if (props.onlineStatus) {
    onlineStatusClass += " " + classes.active;
  }
  return (
    <span className={classes.friend}>
      <img className={classes.logo} src={logo} alt="user logo" />
      <span className={classes.content}>
        <div className={classes.name}>{props.name}</div>
        <div className={classes.writeMessage}>Write message</div>
      </span>
      <span className={onlineStatusClass} >Online</span>
    </span>
  )
}

export default Friend;
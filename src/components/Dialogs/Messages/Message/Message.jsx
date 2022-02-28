import React from "react";
import classes from "./Message.module.css";

function Message(props) {
  const currUserID = 2;

  return (
    <div className={props.userID === currUserID ? `${classes.message} ${classes.fromCurrUser}` : classes.message}>{props.text}</div>
  )
}

export default Message;
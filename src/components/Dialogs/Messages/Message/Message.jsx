import React from "react";
import classes from "./Message.module.css";

function Message(props) {
  const currUserID = 2;

  let messageClass = classes.message;
  if (props.userID === currUserID) {
    messageClass += " " + classes.fromCurrUser;
  }

  return <div className={messageClass}>{props.text}</div>;
}

export default Message;

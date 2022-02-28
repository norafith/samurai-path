import React from "react";
import Message from "./Message/Message";
import classes from "./Messages.module.css";

function Messages(props) {
  const messageElements = props.messages.map((message) => <Message text={message.text} messageID={message.messageID} userID={message.userID} />)

  return (
    <div className={classes.messages}>
    {messageElements}
    </div>
  )
}

export default Messages;
import React from "react";
import Message from "./Message/Message";
import classes from "./Messages.module.css";
import WriteMessageBar from "./WriteMessageBar/WriteMessageBar"

function Messages(props) {
  const messageElements = props.store.getState().dialogs.messages.messagesList.map((message) => <Message text={message.text} messageID={message.messageID} userID={message.userID} />)

  return (
    <div className={classes.messages}>
      <div className={classes.messagesList}>
      {messageElements}
      </div>
      <WriteMessageBar store={props.store} />
    </div>
  )
}

export default Messages;
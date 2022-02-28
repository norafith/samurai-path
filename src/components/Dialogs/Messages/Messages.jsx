import React from "react";
import Message from "./Message/Message";

function Messages(props) {
  const messageElements = props.messages.map((message) => <Message text={message.text} id={message.id} />)

  return (
    <div>
    {messageElements}
    </div>
  )
}

export default Messages;
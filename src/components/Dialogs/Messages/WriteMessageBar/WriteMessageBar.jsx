import React from "react";
import classes from "./WriteMessageBar.module.css";
import sendMessageImg from "./sendMessage.png";

function WriteMessage(props) {
  const inputFieldRef = React.createRef();
	
  function newMessage(event) {
    if (event.type !== "click" && event.key !== "Enter") return;
    props.newMessage();
  }
	
  function inputHandler() {
    let text = inputFieldRef.current.value;
    props.inputHandler(text);
  }
  
  return (
    <div className={classes.writeMessage}>
      <input type="text" ref={inputFieldRef} onChange={inputHandler} onKeyPress={newMessage} className={classes.writeMessageText} placeholder="Write a message..." value={props.draftMessage} />
      <button onClick={newMessage} style={{backgroundImage: `url(${sendMessageImg})`}} className={classes.sendMessage}></button>
    </div>
  )
}

export default WriteMessage;
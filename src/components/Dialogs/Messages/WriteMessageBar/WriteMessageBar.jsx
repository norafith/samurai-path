import React from "react";
import classes from "./WriteMessageBar.module.css";
import sendMessageImg from "./sendMessage.png";
import { changeDraftMessageActionCreator, addMessageActionCreator } from "../../../../redux/dialogsReducer";

function WriteMessage(props) {
  const inputFieldRef = React.createRef();
	
  function newMessage(event) {
    if (event.type !== "click" && event.key !== "Enter") return;
    props.store.dispatch(addMessageActionCreator());
  }
	
  function inputHandler() {
    props.store.dispatch(changeDraftMessageActionCreator(inputFieldRef.current.value));
  }
  
  return (
    <div className={classes.writeMessage}>
      <input type="text" ref={inputFieldRef} onChange={inputHandler} onKeyPress={newMessage} className={classes.writeMessageText} placeholder="Write a message..." value={props.store.getState().dialogs.messages.draftMessage} />
      <button onClick={newMessage} style={{backgroundImage: `url(${sendMessageImg})`}} className={classes.sendMessage}></button>
    </div>
  )
}

export default WriteMessage;
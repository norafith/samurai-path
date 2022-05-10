import React from "react";
import Messages from "./Messages";
import { changeDraftMessageActionCreator, addMessageActionCreator } from "../../../redux/dialogsReducer";


function MessagesContainer(props) {
	let draftMessageText = props.store.getState().dialogs.messages.draftMessage;

  function newMessage() {
    props.store.dispatch(addMessageActionCreator());
  }
	
  function inputHandler(text) {
    props.store.dispatch(changeDraftMessageActionCreator(text));
  }

	return <Messages 
		messagesList={props.store.getState().dialogs.messages.messagesList}
		newMessage={newMessage}
		inputHandler={inputHandler}
		draftMessage={draftMessageText}
	/>
}

export default MessagesContainer;
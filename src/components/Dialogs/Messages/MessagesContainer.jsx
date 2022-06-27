import Messages from "./Messages";
import { changeDraftMessageActionCreator as changeDraftMessage, addMessageActionCreator as addMessage } from "../../../redux/dialogsReducer";
import { connect } from "react-redux";

// function MessagesContainer(props) {
// 	let draftMessageText = props.store.getState().dialogs.messages.draftMessage;

//   function newMessage() {
//     props.store.dispatch(addMessageActionCreator());
//   }
	
//   function inputHandler(text) {
//     props.store.dispatch(changeDraftMessageActionCreator(text));
//   }

// 	return <Messages 
// 		messagesList={props.store.getState().dialogs.messages.messagesList}
// 		newMessage={newMessage}
// 		inputHandler={inputHandler}
// 		draftMessage={draftMessageText}
// 	/>
// }

function mapStateToProps(state) {
	return {
		messagesList: state.dialogs.messages.messagesList,
		draftMessage:  state.dialogs.messages.draftMessage
	}	
}

const mapDispatchToProps = { changeDraftMessage, addMessage }

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)

export default MessagesContainer;
import Messages from "./Messages";
import { changeDraftMessageActionCreator, addMessageActionCreator } from "../../../redux/dialogsReducer";
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

function mapDispatchToProps(dispatch) {
	return {
		changeDraftMessage(text) {
			dispatch(changeDraftMessageActionCreator(text));
		},

		newMessage() {
			dispatch(addMessageActionCreator());
		}
	}
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)

export default MessagesContainer;
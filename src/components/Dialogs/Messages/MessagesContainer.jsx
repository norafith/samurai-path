import Messages from "./Messages";
import { addMessageActionCreator as addMessage } from "../../../redux/dialogsReducer";
import { connect } from "react-redux";
import { getMessagesList } from "../../../redux/selectors/dialogsSelector";

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
    messagesList: getMessagesList(state),
  };
}

const mapDispatchToProps = { addMessage };

const MessagesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages);

export default MessagesContainer;

import { connect } from "react-redux";
import ChatList from "./ChatList";
import { changeSearchTextActionCreator } from "../../../redux/dialogsReducer";

function mapStateToProps(state) {
  return {
    shownChatOptions: state.dialogs.shownChatOptions,
    searchText: state.dialogs.searchText
  }
}

function mapDispatchToProps(dispatch) {
  return {
    changeSearchText(text) {
      dispatch(changeSearchTextActionCreator(text));
    }  
  }
}

const ChatListContainer = connect(mapStateToProps, mapDispatchToProps)(ChatList);

export default ChatListContainer;
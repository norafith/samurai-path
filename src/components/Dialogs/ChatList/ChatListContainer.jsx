import { connect } from "react-redux";
import ChatList from "./ChatList";
import { changeSearchTextActionCreator, setChatOptionsAC } from "../../../redux/dialogsReducer";

function mapStateToProps(state) {
  return {
    shownChatOptions: state.users.followedList,
    searchText: state.dialogs.searchText
  }
}

function mapDispatchToProps(dispatch) {
  return {
    changeSearchText(text) {
      dispatch(changeSearchTextActionCreator(text));
    },
    
    setChatOptions(chatOptions) {
      dispatch(setChatOptionsAC(chatOptions));
    }
  }
}

const ChatListContainer = connect(mapStateToProps, mapDispatchToProps)(ChatList);

export default ChatListContainer;
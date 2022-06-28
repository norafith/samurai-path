import React from "react";
import { connect } from "react-redux";
import ChatList from "./ChatList";
import {
  changeSearchTextActionCreator as changeSearchText,
  setChatOptionsAC as setChatOptions,
  setFetchingStateAC as setFetchingState,
} from "../../../redux/dialogsReducer";
import { usersAPI } from "../../../api/api";

class ChatListApiContainer extends React.Component {
  componentDidMount() {
    this.props.setFetchingState(true);
    return usersAPI.getFriends().then((result) => {
      this.props.setChatOptions(result.items);
      this.props.setFetchingState(false);
    });
  }

  render() {
    return <ChatList {...this.props} />;
  }
}

function mapStateToProps(state) {
  return {
    shownChatOptions: state.dialogs.shownChatOptions,
    searchText: state.dialogs.searchText,
    fetchingState: state.dialogs.fetchingState,
  };
}
const mapDispatchToProps = {
  changeSearchText,
  setChatOptions,
  setFetchingState,
};
const ChatListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatListApiContainer);

export default ChatListContainer;

import React from "react";
import { connect } from "react-redux";
import ChatList from "./ChatList";
import {
  changeSearchTextActionCreator as changeSearchText,
  setChatOptionsAC as setChatOptions,
  setFetchingStateAC as setFetchingState,
} from "../../../redux/dialogsReducer";
import { usersAPI } from "../../../api/api";
import {
  getDialogsFetchingState,
  getDialogsSearchText,
  getShownChatOptions,
} from "../../../redux/selectors/dialogsSelector";

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
    shownChatOptions: getShownChatOptions(state),
    searchText: getDialogsSearchText(state),
    fetchingState: getDialogsFetchingState(state),
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

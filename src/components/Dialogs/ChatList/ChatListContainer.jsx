import React from "react";
import { connect } from "react-redux";
import ChatList from "./ChatList";
import {
  changeSearchTextActionCreator as changeSearchText,
  setChatOptionsAC as setChatOptions,
  setFetchingStateAC as setFetchingState,
} from "../../../redux/dialogsReducer";
import Preloader from "./../../common/Preloader/Preloader";

class ChatListApiContainer extends React.Component {
  componentDidMount() {
    this.props.setFetchingState(true);
    return fetch(
      `https://social-network.samuraijs.com/api/1.0/users?friend=true`,
      {
        method: "GET",
        mode: "cors",
        credentials: "include",
        headers: {
          "API-KEY": "8ef37fda-1577-4784-a323-4a2da600bd86",
        },
      }
    )
      .then((result) => result.json())
      .then((result) => {
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

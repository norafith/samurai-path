import React from "react";
import ChatOption from "./ChatOption/ChatOption";
import classes from "./ChatList.module.css";
import ChatSearchBar from "./ChatSearchBar/ChatSearchBar";

class ChatList extends React.Component {
  componentDidMount() {
    this.props.setChatOptions(this.props.shownChatOptions);
  }

  render() {
    const chatOptionsElements = this.props.shownChatOptions.map(
      (option) => <ChatOption userID={option.id} name={option.name} />
    );

    return (
      <ul className={classes.chatList}>
        <ChatSearchBar
          changeSearchText={this.props.changeSearchText}
          searchText={this.props.searchText}
        />
        {chatOptionsElements}
      </ul>
    )
  }
}

export default ChatList;
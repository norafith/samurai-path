import React from "react";
import ChatOption from "./ChatOption/ChatOption";
import classes from "./ChatList.module.css";
import SearchBar from "./SearchBar/SearchBar";

function ChatList(props) {
  const chatOptionsElements = props.chatOptions.map((option) => <ChatOption userID={option.userID} name={option.name} />);

  return (
    <ul className={classes.chatList}>
      <SearchBar />
      {
        chatOptionsElements
      }
    </ul>
  )
}

export default ChatList;
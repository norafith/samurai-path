import React from "react";
import ChatOption from "./ChatOption/ChatOption";
import classes from "./ChatList.module.css";
import ChatSearchBar from "./ChatSearchBar/ChatSearchBar";

function ChatList(props) {
  const chatOptionsElements = props.shownChatOptions.map(
    (option) => <ChatOption userID={option.userID} name={option.name} />
  );

  return (
    <ul className={classes.chatList}>
      <ChatSearchBar 
        changeSearchText={props.changeSearchText} 
        searchText={props.searchText} 
      />
      { chatOptionsElements }
    </ul>
  )
}

export default ChatList;
import React from "react";
import ChatOption from "./ChatOption/ChatOption";
import classes from "./ChatList.module.css";
import ChatSearchBar from "./ChatSearchBar/ChatSearchBar";
import Preloader from "../../common/Preloader/Preloader";

function ChatList(props) {
  const chatOptionsElements = props.shownChatOptions.map((option) => (
    <ChatOption userID={option.id} name={option.name} />
  ));

  return (
    <ul className={classes.chatList}>
      <ChatSearchBar
        changeSearchText={props.changeSearchText}
        searchText={props.searchText}
      />
      {!props.fetchingState ? chatOptionsElements : <Preloader />}
    </ul>
  );
}

export default ChatList;

import React from "react";
import classes from "./Friends.module.css";
import FriendSearchBar from "./FriendSearchBar/FriendSearchBar";
import FriendsList from "./FriendsList/FriendsList";

function Friends(props) {
  return (
    <main>
      <section>
        <FriendSearchBar />
        <FriendsList friends={props.store.getState().friends} />
      </section>
    </main>
  )
}

export default Friends;
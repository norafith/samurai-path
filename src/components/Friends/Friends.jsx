import React from "react";
import classes from "./Friends.module.css";
import FriendSearchBar from "./FriendSearchBar/FriendSearchBar";
import FriendsListContainer from "./FriendsList/FriendsListContainer";

function Friends(props) {
  return (
    <main>
      <section>
        <FriendSearchBar />
        <FriendsListContainer store={props.store} />
      </section>
    </main>
  )
}

export default Friends;
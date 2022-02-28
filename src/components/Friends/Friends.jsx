import React from "react";
import classes from "./Friends.module.css";
import FriendSearchBar from "./FriendSearchBar/FriendSearchBar";

function Friends(props) {
  return (
    <main>
      <section>
        <FriendSearchBar />
        <FriendsList />
      </section>
    </main>
  )
}

export default Friends;
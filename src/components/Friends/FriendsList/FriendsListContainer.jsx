import React from "react";
import FriendsList from "./FriendsList";

function FriendsListContainer(props) {
  const state = props.store.getState();

  return <FriendsList friends={state.friends} mobileStatus={state.navBar.mobileStatus} />
}

export default FriendsListContainer;
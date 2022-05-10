import React from "react";
import classes from "./FriendsList.module.css";
import Friend from "./Friend/Friend";

function FriendsList(props) {
  const friendsElements = props.friends.map((friend) => <Friend name={friend.name} userID={friend.userID} onlineStatus={friend.onlineStatus} />)
  
  let mainClassName = classes.friendsList;

  if (props.mobileStatus) mainClassName += " " + classes.mobile;

  return (
    <main className={mainClassName}>
      {friendsElements}
    </main>
  )
}

export default FriendsList;
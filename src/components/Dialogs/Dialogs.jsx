import React from "react";
import classes from "./Dialogs.module.css";
import ChatListContainer from "./ChatList/ChatListContainer";
import MessagesContainer from "./Messages/MessagesContainer";

function Dialogs(props) {
  console.log("DSADSADAS")
  return (
    <main>
      <section className={classes.mainSection}>
        <ChatListContainer />
        <MessagesContainer />
      </section>
    </main>
  )
}

export default Dialogs;
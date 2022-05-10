import React from "react";
import classes from "./Dialogs.module.css";
import ChatList from "./ChatList/ChatList";
import MessagesContainer from "./Messages/MessagesContainer";

function Dialogs(props) {
  return (
    <main>
      <section className={classes.mainSection}>
        <ChatList store={props.store} />
        <MessagesContainer store={props.store} />
      </section>
    </main>
  )
}

export default Dialogs;
import React from "react";
import classes from "./Dialogs.module.css";
import ChatList from "./ChatList/ChatList";
import Messages from "./Messages/Messages";

function Dialogs(props) {
  return (
    <main>
      <section className={classes.mainSection}>
        <ChatList store={props.store} />
        <Messages store={props.store} />
      </section>
    </main>
  )
}

export default Dialogs;
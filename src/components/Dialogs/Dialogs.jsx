import React from "react";
import classes from "./Dialogs.module.css";
import ChatList from "./ChatList/ChatList";
import Messages from "./Messages/Messages";

function Dialogs(props) {
  return (
    <main>
      <section className={classes.mainSection}>
        <ChatList chatOptions={props.chatOptions} />
        <Messages messages={props.messages} />
      </section>
    </main>
  )
}

export default Dialogs;
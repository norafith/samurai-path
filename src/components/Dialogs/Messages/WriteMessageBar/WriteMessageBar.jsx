import React from "react";
import classes from "./WriteMessageBar.module.css";
import sendMessageImg from "./sendMessage.png";
import { Form, Field } from "react-final-form";

function WriteMessage(props) {
  const inputFieldRef = React.createRef();

  function MyForm(props) {
    return (
      <form onSubmit={props.handleSubmit} className={classes.writeMessage}>
        <Field
          component="input"
          name="message"
          type="text"
          ref={inputFieldRef}
          className={classes.writeMessageText}
          placeholder="Write a message..."
          value={props.draftMessage}
        />
        <button
          style={{ backgroundImage: `url(${sendMessageImg})` }}
          className={classes.sendMessage}
        ></button>
      </form>
    );
  }

  return (
    <Form
      onSubmit={props.addMessage}
      render={({ handleSubmit }) => (
        <MyForm {...props} handleSubmit={handleSubmit} />
      )}
    />
  );
}

export default WriteMessage;

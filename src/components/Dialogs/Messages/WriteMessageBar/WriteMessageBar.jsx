import React from "react";
import classes from "./WriteMessageBar.module.css";
import sendMessageImg from "./sendMessage.png";
import { Form } from "react-final-form";
import createFormTest from "../../../../validation/validation";
import FieldInputContainer from "../../../common/FieldInputContainer/FieldInputContainer";

function WriteMessage(props) {
  function MyForm(props) {
    return (
      <form onSubmit={props.handleSubmit} className={classes.writeMessage}>
        <FieldInputContainer
          name="message"
          type="text"
          placeholder="Write a message..."
          initialClass={classes.writeMessageText}
          errorClass={classes.error}
        />
        <button
          type="submit"
          style={{ backgroundImage: `url(${sendMessageImg})` }}
          className={classes.sendMessage}
        ></button>
      </form>
    );
  }

  return (
    <Form
      onSubmit={props.addMessage}
      validate={createFormTest(10)}
      render={(args) => <MyForm {...props} {...args} />}
    />
  );
}

export default WriteMessage;

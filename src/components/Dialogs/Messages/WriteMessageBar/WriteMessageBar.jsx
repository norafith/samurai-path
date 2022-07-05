import React from "react";
import classes from "./WriteMessageBar.module.css";
import sendMessageImg from "./sendMessage.png";
import { Form, Field } from "react-final-form";
import createFormTest from "../../../../validation/validation";

function WriteMessage(props) {
  function MyForm(props) {
    return (
      <form onSubmit={props.handleSubmit} className={classes.writeMessage}>
        <Field name="message">
          {({ input, meta }) => {
            return (
              <input
                type="text"
                className={
                  meta.valid
                    ? classes.writeMessageText
                    : `${classes.writeMessageText} ${classes.error}`
                }
                placeholder="Write a message..."
                {...input}
              />
            );
          }}
        </Field>
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

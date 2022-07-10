import React from "react";
import classes from "./CreatePost.module.css";
import { Form } from "react-final-form";
import createFormTest from "../../../../validation/validation";
import FieldInputContainer from "./../../../common/FieldInputContainer/FieldInputContainer";

function CreatePost(props) {
  function MyForm(props) {
    return (
      <form onSubmit={props.handleSubmit} className={classes.createPost}>
        <FieldInputContainer
          name="postText"
          type="text"
          initialClass={classes.content}
          errorClass={classes.error}
          placeholder="Write something..."
        />
        <button className={classes.createButton}>Create</button>
      </form>
    );
  }

  return (
    <Form
      onSubmit={props.addPost}
      validate={createFormTest(50)}
      render={({ handleSubmit }) => (
        <MyForm {...props} handleSubmit={handleSubmit} />
      )}
    />
  );
}

export default CreatePost;

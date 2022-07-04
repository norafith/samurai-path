import React from "react";
import classes from "./CreatePost.module.css";
import { Form, Field } from "react-final-form";

function CreatePost(props) {
  function MyForm(props) {
    return (
      <form onSubmit={props.handleSubmit} className={classes.createPost}>
        <Field
          component="textarea"
          name="postText"
          className={classes.content}
          placeholder="Write something..."
        />
        <button className={classes.createButton}>Create</button>
      </form>
    );
  }

  return (
    <Form
      onSubmit={props.addPost}
      render={({ handleSubmit }) => (
        <MyForm {...props} handleSubmit={handleSubmit} />
      )}
    />
  );
}

export default CreatePost;

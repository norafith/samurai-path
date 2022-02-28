import React from "react";
import classes from "./CreatePost.module.css";

function CreatePost() {
  return (
    <div className={classes.createPost}>
      <textarea className={classes.content} placeholder="Write something..."></textarea>
      <button className={classes.createButton}>Create</button>
    </div>
  );
}

export default CreatePost
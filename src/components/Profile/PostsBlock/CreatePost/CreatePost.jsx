import React from "react";
import classes from "./CreatePost.module.css";
import { addPostActionCreator, changeDraftPostActionCreator } from "../../../../redux/profileReducer";

function CreatePost(props) {
  const textareaRef = React.createRef();

  function createBtnHandler() {
    props.store.dispatch(addPostActionCreator());
  }

  function textareaInputHandler() {
    props.store.dispatch(changeDraftPostActionCreator(textareaRef.current.value));
  }

  return (
    <div className={classes.createPost}>
      <textarea onChange={textareaInputHandler} ref={textareaRef} className={classes.content} placeholder="Write something..." value={props.store.getState().profile.posts.draftPost}/>
      <button onClick={createBtnHandler} className={classes.createButton}>Create</button>
    </div>
  );
}

export default CreatePost
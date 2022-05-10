import React from "react";
import classes from "./CreatePost.module.css";
import { addPostActionCreator, changeDraftPostActionCreator } from "../../../../redux/profileReducer";

function CreatePost(props) {
  const textareaRef = React.createRef();

  function textareaInputHandler() {
    let text = textareaRef.current.value;
    props.textareaInputHandler(text);
  }

  return (
    <div className={classes.createPost}>
      <textarea onChange={textareaInputHandler} ref={textareaRef} className={classes.content} placeholder="Write something..." value={props.draftPostValue}/>
      <button onClick={props.createBtnHandler} className={classes.createButton}>Create</button>
    </div>
  );
}

export default CreatePost
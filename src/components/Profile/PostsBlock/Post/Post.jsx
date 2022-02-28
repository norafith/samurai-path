import React from "react";
import classes from "./Post.module.css";
import boldMaster from "./boldMaster.png"

function Post(props) {
  return (
    <div className={classes.post}>
      <img src={boldMaster} className={classes.logo} alt="user logo" />
      <div className={classes.postContent}>
        <div className={classes.postInfo}>
          <span className={classes.username}>{props.username}</span>
          <span className={classes.date}>{props.date}</span>
        </div>
        <p className={classes.text}>{props.text}</p>
        <div className={classes.controls}>
          <span className={classes.likeAmount}>{props.likeAmount}</span>
        </div>
      </div>
    </div>
  );
}

export default Post
import React from "react";
import classes from "./User.module.css";
import logo from "./user.png"

function User(props) {
  // let onlineStatusClass = classes.onlineStatus;
  // if (props.onlineStatus) {
  //   onlineStatusClass += " " + classes.active;
  // }
  return (
    <span className={classes.user}>
      <div className={classes.content}>
        <img className={classes.logo} src={logo} alt="user logo" />
        <div className={classes.text}>
          <div className={classes.name}>{props.name}</div>
          <div className={classes.writeMessage}>Write message</div>
        </div>
      </div>
      <div className={classes.additional}>
        <button
          onClick={props.changeFollowedStatus.bind(this, props.id)}
        >{ props.followed ? "Unfollow" : "Follow" }</button>
        <div className={classes.id}>{props.id}</div>
      </div>
    </span>
  )
}

export default User;
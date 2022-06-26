import React from "react";
import classes from "./User.module.css";
import userImg from "../../../../assets/user.png"

function User(props) {
  // let onlineStatusClass = classes.onlineStatus;
  // if (props.onlineStatus) {
  //   onlineStatusClass += " " + classes.active;
  // }
  return (
    <div className={classes.user}>
      <div className={classes.content}>
        <img className={classes.logo} src={props.photo ? props.photo : userImg} alt="user logo" />
        <div className={classes.text}>
          <div className={classes.name}>{props.name}</div>
          <div className={classes.status}>{ props.status ? props.status : "No status." }</div>
          <div className={classes.writeMessage}>Write message</div>
        </div>
      </div>
      <div className={classes.additional}>
        <button
          onClick={() => props.changeFollowedStatus(props.id)}
        >{ props.followed ? "Unfollow" : "Follow" }</button>
        <div className={classes.id}>{props.id}</div>
      </div>
    </div>
  )
}

export default User;
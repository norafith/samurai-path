import React from "react";
import classes from "./User.module.css";
import userImg from "../../../../assets/user.png"
import { NavLink } from "react-router-dom";

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
          <NavLink to={"/profile/" + props.id} className={classes.name}>{props.name}</NavLink>
          <div className={classes.status}>{ props.status ? props.status : "No status." }</div>
          <div className={classes.writeMessage}>Write message</div>
        </div>
      </div>
      <div className={classes.additional}>
        <button
          onClick={() => {
            const requestType = props.followed ? "DELETE" : "POST";
            fetch(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, {
              method: requestType,
              mode: "cors",
              credentials: "include",
              headers: {
                "API-KEY": "8ef37fda-1577-4784-a323-4a2da600bd86"
              }
            }).then((result) => result.json())
              .then((result) => props.changeFollowedStatus(props.id))
          }}
        >{ props.followed ? "Unfollow" : "Follow" }</button>
        <div className={classes.id}>{props.id}</div>
      </div>
    </div>
  )
}

export default User;
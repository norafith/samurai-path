import React from "react";
import classes from "./User.module.css";
import userImg from "../../../../assets/user.png";
import { NavLink } from "react-router-dom";

function User(props) {
  let buttonClass = classes.followButton + " ";
  buttonClass += props.followed ? classes.unfollow : classes.follow;
  return (
    <div className={classes.user}>
      <div className={classes.content}>
        <img
          className={classes.logo}
          src={props.photo ? props.photo : userImg}
          alt="user logo"
        />
        <div className={classes.text}>
          <NavLink to={"/profile/" + props.id} className={classes.name}>
            {props.name}
          </NavLink>
          <div className={classes.status}>
            {props.status ? props.status : "No status."}
          </div>
          <div className={classes.writeMessage}>Write message</div>
        </div>
      </div>
      <div className={classes.additionalBlock}>
        <button
          disabled={props.followingUsers.includes(props.id)}
          onClick={() => props.changeFollowedStatus(props.followed, props.id)}
          className={buttonClass}
        >
          {props.followed ? "Unfollow" : "Follow"}
        </button>
        <div className={classes.id}>{props.id}</div>
      </div>
    </div>
  );
}

export default User;

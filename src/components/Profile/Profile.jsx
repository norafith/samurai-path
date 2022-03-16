import React from "react";
import MainUserInfo  from "./MainUserInfo/MainUserInfo"
import UserDescription from "./UserDescription/UserDescription";
import PostsBlock from "./PostsBlock/PostsBlock";
import classes from "./Profile.module.css";

function Profile(props) {
	
  return (
    <main className={classes.profile}>
      <MainUserInfo />
      <UserDescription />
      <PostsBlock store={props.store} />
    </main>
  )
}

export default Profile;
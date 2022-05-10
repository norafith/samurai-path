import React from "react";
import MainUserInfo  from "./MainUserInfo/MainUserInfo"
import UserDescription from "./UserDescription/UserDescription";
import PostsBlockContainer from "./PostsBlock/PostsBlockContainer";
import classes from "./Profile.module.css";

function Profile(props) {
	
  return (
    <main className={classes.profile}>
      <MainUserInfo />
      <UserDescription />
      <PostsBlockContainer store={props.store} />
    </main>
  )
}

export default Profile;
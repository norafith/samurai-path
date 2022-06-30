import React from "react";
import classes from "./UsersList.module.css";
import User from "./User/User";

function UsersList(props) {
  const usersElements = props.users.map((user) => {
    return (
      <User
        name={user.name}
        id={user.id}
        followed={user.followed}
        status={user.status}
        photo={user.photos.large}
        changeFollowedStatus={props.changeFollowedStatus}
        disableUserFollowingState={props.disableUserFollowingState}
        toggleUserFollowingState={props.toggleUserFollowingState}
        followingUsers={props.followingUsers}
      />
    );
  });

  const pageControlElements = [];
  for (
    let i = 1 + props.currentPageControlOffset;
    i <= 5 + props.currentPageControlOffset;
    i++
  ) {
    let className = classes.pageControlButton;
    if (props.currentPage === i) {
      className += " " + classes.active;
    }

    pageControlElements.push(
      <span
        className={className}
        onClick={() => {
          props.changeCurrentPage(i);
          props.getUsers(i);
        }}
      >
        {i}
      </span>
    );
  }

  let mainClassName = classes.usersList;

  if (props.mobileStatus) mainClassName += " " + classes.mobile;

  return (
    <main className={mainClassName}>
      <div>
        <span
          className={classes.pageOffset}
          onClick={() => props.changeCurrentPageControlOffset(false)}
        >
          {"<"}
        </span>
        {pageControlElements}
        <span
          className={classes.pageOffset}
          onClick={() => props.changeCurrentPageControlOffset(true)}
        >
          {">"}
        </span>
      </div>
      {usersElements}
    </main>
  );
}

export default UsersList;

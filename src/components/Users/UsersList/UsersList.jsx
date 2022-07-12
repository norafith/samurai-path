import React from "react";
import classes from "./UsersList.module.css";
import User from "./User/User";
import PageControl from "./../../common/PageControl/PageControl";

function UsersList(props) {
  const usersElements = props.users.map((user) => {
    return (
      <User
        key={user.id}
        name={user.name}
        id={user.id}
        followed={user.followed}
        status={user.status}
        photo={user.photos.large}
        changeFollowedStatus={props.changeFollowedStatus}
        followingUsers={props.followingUsers}
      />
    );
  });

  let mainClassName = classes.usersList;

  if (props.mobileStatus) mainClassName += " " + classes.mobile;

  return (
    <main className={mainClassName}>
      <PageControl
        loadItems={props.getUsers}
        currentPageControlOffset={props.currentPageControlOffset}
        changeCurrentPage={props.changeCurrentPage}
        changeCurrentPageControlOffset={props.changeCurrentPageControlOffset}
        currentPage={props.currentPage}
      />
      {usersElements}
    </main>
  );
}

export default UsersList;

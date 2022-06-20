import React from "react";
import classes from "./UsersList.module.css";
import User from "./User/User";

function UsersList(props) {
  debugger;
  if (props.users.length === 0) {
    props.loadUsers([
      { userID: 1, name: "Sasha", onlineStatus: true, friendStatus: false },
      { userID: 2, name: "Julia", onlineStatus: true, friendStatus: false },
      { userID: 3, name: "Ira", onlineStatus: false, friendStatus: true },
      { userID: 4, name: "Mark", onlineStatus: false, friendStatus: false },
      { userID: 5, name: "John", onlineStatus: true, friendStatus: false },
    ])
  }

  const usersElements = props.users.map(
    (user) => {
      return (
        <User 
          name={user.name} 
          userID={user.userID} 
          onlineStatus={user.onlineStatus} 
        />
      )
    }
  );
  
  let mainClassName = classes.usersList;

  if (props.mobileStatus) mainClassName += " " + classes.mobile;

  return (
    <main className={mainClassName}>
      {usersElements}
    </main>
  )
}

export default UsersList;
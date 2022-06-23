import React from "react";
import classes from "./UsersList.module.css";
import User from "./User/User";

class UsersList extends React.Component {
  componentDidMount() {
    if (this.props.users.length === 0) {
      fetch("https://social-network.samuraijs.com/api/1.0/users", {
        type: "GET",
        headers: {
          "API-KEY": "8ef37fda-1577-4784-a323-4a2da600bd86" 
        }
      }).then((result) => result.json()).then((result => this.props.loadUsers(result.items))) //imitation of api request
    }
  }
  render() {
    const usersElements = this.props.users.map(
      (user) => {
        return (
          <User
            name={user.name}
            id={user.id}
            followed={user.followed}
            changeFollowedStatus={this.props.changeFollowedStatus}
          />
        )
      }
    );

    let mainClassName = classes.usersList;
      
    if (this.props.mobileStatus) mainClassName += " " + classes.mobile;

    return (
      <main className={mainClassName}>
        
        {usersElements}
      </main>
    )
  }
}


// function UsersList(props) {
//   if (props.users.length === 0) {
//     props.loadUsers([
//       { id: 1, name: "Sasha", onlineStatus: true, friendStatus: false },
//       { id: 2, name: "Julia", onlineStatus: true, friendStatus: false },
//       { id: 3, name: "Ira", onlineStatus: false, friendStatus: true },
//       { id: 4, name: "Mark", onlineStatus: false, friendStatus: false },
//       { id: 5, name: "John", onlineStatus: true, friendStatus: false },
//     ])
//   }

//   const usersElements = props.users.map(
//     (user) => {
//       return (
//         <User 
//           name={user.name} 
//           id={user.id} 
//           onlineStatus={user.onlineStatus}
//           friendStatus={user.friendStatus}
//           changeFriendStatus={props.changeFriendStatus}
//         />
//       )
//     }
//   );
  
//   let mainClassName = classes.usersList;

//   if (props.mobileStatus) mainClassName += " " + classes.mobile;

//   return (
//     <main className={mainClassName}>
//       {usersElements}
//     </main>
//   )
// }

export default UsersList;
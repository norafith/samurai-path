import React from "react";
import UsersList from "./UsersList";

class UsersListApiContainer extends React.Component {
  getUsers(page) {
    return fetch(`https://social-network.samuraijs.com/api/1.0/users?count=5&page=${page}`, {
      type: "GET",
      headers: {
        "API-KEY": "8ef37fda-1577-4784-a323-4a2da600bd86"
      }
    }).then((result) => result.json()).then((result) => {
      this.props.loadUsers(result.items); 
      this.props.setTotalCount(result.totalCount);
    })
  }

  componentDidMount() {
    this.getUsers(this.props.currentPage);
  }

  render() {
    return <UsersList
      users={this.props.users}
      currentPageControlOffset={this.props.currentPageControlOffset}
      mobileStatus={this.props.mobileStatus}
      changeCurrentPage={this.props.changeCurrentPage}
      changeCurrentPageControlOffset={this.props.changeCurrentPageControlOffset}
      getUsers={this.getUsers.bind(this)}
      changeFollowedStatus={this.props.changeFollowedStatus}
      currentPage={this.props.currentPage}
    />
  }
}

export default UsersListApiContainer;
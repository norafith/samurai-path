import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import UsersList from "./UsersList";

class UsersListApiContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage);
  }

  render() {
    return (
      <>
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          <UsersList
            users={this.props.users}
            currentPageControlOffset={this.props.currentPageControlOffset}
            mobileStatus={this.props.mobileStatus}
            changeCurrentPage={this.props.changeCurrentPage}
            changeCurrentPageControlOffset={
              this.props.changeCurrentPageControlOffset
            }
            getUsers={this.props.getUsers}
            changeFollowedStatus={this.props.changeFollowedStatus}
            currentPage={this.props.currentPage}
            followingUsers={this.props.followingUsers}
          />
        )}
      </>
    );
  }
}

export default UsersListApiContainer;

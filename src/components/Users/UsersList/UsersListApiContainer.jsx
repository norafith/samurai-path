import React from "react";
import { usersAPI } from "../../../api/api";
import Preloader from "../../common/Preloader/Preloader";
import UsersList from "./UsersList";

class UsersListApiContainer extends React.Component {
  getUsers(page) {
    this.props.setFetchingState(true);
    return usersAPI.getUsers(page).then((result) => {
      this.props.loadUsers(result.items);
      this.props.setTotalCount(result.totalCount);
      this.props.setFetchingState(false);
    });
  }

  componentDidMount() {
    this.getUsers(this.props.currentPage);
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
            getUsers={this.getUsers.bind(this)}
            changeFollowedStatus={this.props.changeFollowedStatus}
            currentPage={this.props.currentPage}
          />
        )}
      </>
    );
  }
}

export default UsersListApiContainer;

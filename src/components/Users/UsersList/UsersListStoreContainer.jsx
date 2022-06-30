import { connect } from "react-redux";
import {
  changeCurrentPageAC as changeCurrentPage,
  changeCurrentPageControlOffsetAC as changeCurrentPageControlOffset,
  changeFollowedStatusAC as changeFollowedStatus,
  loadUsersAC as loadUsers,
  setFetchingStateAC as setFetchingState,
  setTotalCountAC as setTotalCount,
  toggleUserFollowingStateAC as toggleUserFollowingState,
  disableUserFollowingStateAC as disableUserFollowingState,
} from "../../../redux/usersReducer";
import UsersListApiContainer from "./UsersListApiContainer";

function mapStateToProps(state) {
  return {
    users: state.users.usersList,
    currentPage: state.users.currentPage,
    currentPageControlOffset: state.users.currentPageControlOffset,
    mobileStatus: state.navBar.mobileStatus,
    isFetching: state.users.isFetching,
    followingUsers: state.users.followingUsers,
  };
}

const mapDispatchToProps = {
  loadUsers,
  changeFollowedStatus,
  changeCurrentPage,
  setTotalCount,
  changeCurrentPageControlOffset,
  setFetchingState,
  disableUserFollowingState,
  toggleUserFollowingState,
};

const UsersListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersListApiContainer);

export default UsersListContainer;

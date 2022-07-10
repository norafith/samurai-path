import { connect } from "react-redux";
import {
  changeCurrentPageAC as changeCurrentPage,
  changeCurrentPageControlOffsetAC as changeCurrentPageControlOffset,
  changeFollowedStatusThunkCreator as changeFollowedStatus,
  getUsersThunkCreator as getUsers,
} from "../../../redux/reducers/usersReducer";
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
  getUsers,
  changeFollowedStatus,
  changeCurrentPage,
  changeCurrentPageControlOffset,
};

const UsersListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersListApiContainer);

export default UsersListContainer;

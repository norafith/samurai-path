import { connect } from "react-redux";
import { changeCurrentPageAC as changeCurrentPage, changeCurrentPageControlOffsetAC as changeCurrentPageControlOffset, changeFollowedStatusAC as changeFollowedStatus, loadUsersAC as loadUsers, setFetchingStateAC as setFetchingState, setTotalCountAC as setTotalCount } from "../../../redux/usersReducer";
import UsersListApiContainer from "./UsersListApiContainer";

function mapStateToProps(state) {
  return {
    users: state.users.usersList,
    currentPage: state.users.currentPage,
    currentPageControlOffset: state.users.currentPageControlOffset,
    mobileStatus: state.navBar.mobileStatus,
    isFetching: state.users.isFetching,
  }
}

const mapDispatchToProps = {
  loadUsers,
  changeFollowedStatus,
  changeCurrentPage,
  setTotalCount,
  changeCurrentPageControlOffset,
  setFetchingState
}

const UsersListContainer = connect(mapStateToProps, mapDispatchToProps)(UsersListApiContainer);

export default UsersListContainer;
import { connect } from "react-redux";
import { changeCurrentPageAC, changeCurrentPageControlOffsetAC, changeFollowedStatusAC, loadUsersAC, setTotalCountAC } from "../../../redux/usersReducer";
import UsersListApiContainer from "./UsersListApiContainer";

function mapStateToProps(state) {
  return {
    users: state.users.usersList,
    currentPage: state.users.currentPage,
    currentPageControlOffset: state.users.currentPageControlOffset,
    mobileStatus: state.navBar.mobileStatus,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadUsers(usersList) {
      dispatch(loadUsersAC(usersList));
    },

    changeFollowedStatus(id) {
      dispatch(changeFollowedStatusAC(id));
    },

    changeCurrentPage(page) {
      dispatch(changeCurrentPageAC(page));
    },

    setTotalCount(totalCount) {
      dispatch(setTotalCountAC(totalCount));
    },

    changeCurrentPageControlOffset(addition) {
      dispatch(changeCurrentPageControlOffsetAC(addition));
    }
  }
}

const UsersListContainer = connect(mapStateToProps, mapDispatchToProps)(UsersListApiContainer);

export default UsersListContainer;
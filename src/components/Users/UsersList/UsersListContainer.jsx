import { connect } from "react-redux";
import {changeFollowedStatusAC, loadUsersAC } from "../../../redux/usersReducer";
import UsersList from "./UsersList";

// function FriendsListContainer(props) {
//   const state = props.store.getState();

//   return <FriendsList friends={state.friends} mobileStatus={state.navBar.mobileStatus} />
// }

function mapStateToProps(state) {
  return {
    users: state.users,
    mobileStatus: state.navBar.mobileStatus
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadUsers(usersList) {
      dispatch(loadUsersAC(usersList));
    },

    changeFollowedStatus(id) {
      dispatch(changeFollowedStatusAC(id));
    }
  }
}

const UsersListContainer = connect(mapStateToProps, mapDispatchToProps)(UsersList);

export default UsersListContainer;
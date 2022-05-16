import { connect } from "react-redux";
import FriendsList from "./FriendsList";

// function FriendsListContainer(props) {
//   const state = props.store.getState();

//   return <FriendsList friends={state.friends} mobileStatus={state.navBar.mobileStatus} />
// }

function mapStateToProps(state) {
  return {
    friends: state.friends,
    mobileStatus: state.navBar.mobileStatus
  }
}

function mapDispatchToProps(dispatch) {
  return {}
}

const FriendsListContainer = connect(mapStateToProps, mapDispatchToProps)(FriendsList);

export default FriendsListContainer;
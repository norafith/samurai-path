import React from "react";
import Profile from "./Profile";
import withRouter from "./ProfileWithRouter";
import { connect } from "react-redux";
import { compose } from "redux";
import withLoginRedirect from "./../hoc/withLoginRedirect";
import {
  addPostActionCreator as addPost,
  setFetchingStateAC as setFetchingState,
  setProfileDataAC as setProfileData,
  getProfileThunkCreator as getProfile,
  setStatusThunkCreator as setStatus,
  changeAvatarPhotoThunkCreator as changeAvatarPhoto,
} from "../../redux/reducers/profileReducer";
import {
  getPostsList,
  getProfileData,
  getProfileFetchingState,
} from "../../redux/selectors/profileSelector";
import { getCurrUserData } from "../../redux/selectors/authSelector";

class ProfileApiContainer extends React.Component {
  componentDidMount() {
    this.props.getProfile(this.props.params.id);
  }

  componentDidUpdate(prevProps) {
    if (this.props.params.id !== prevProps.params.id)
      this.props.getProfile(this.props.params.id);
  }

  render() {
    return <Profile {...this.props} />;
  }
}

// function mapStateToProps(state) {
//   return {
//     postsList: state.profile.posts.postsList,
//     profileData: state.profile.profileData,
//     fetchingState: state.profile.fetchingState,
//     isCurrUserPage:
//       state.auth.currUserData?.data.id === state.profile.profileData?.userId,
//   };
// }
function mapStateToProps(state) {
  return {
    postsList: getPostsList(state),
    profileData: getProfileData(state),
    fetchingState: getProfileFetchingState(state),
    isCurrUserPage:
      getCurrUserData(state)?.data.id === getProfileData(state)?.userId,
  };
}
const mapDispatchToProps = {
  addPost,
  setFetchingState,
  setProfileData,
  getProfile,
  setStatus,
  changeAvatarPhoto,
};

const ProfileSuperContainer = compose(
  withLoginRedirect,
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(ProfileApiContainer);

export default ProfileSuperContainer;

import React from "react";
import Profile from "./Profile";
import withRouter from "./ProfileWithRouter";
import { connect } from "react-redux";
import {
  changeDraftPostActionCreator as changeDraftPost,
  addPostActionCreator as addPost,
  setFetchingStateAC as setFetchingState,
  setProfileDataAC as setProfileData,
  getProfileThunkCreator as getProfile,
} from "../../redux/profileReducer";

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

function mapStateToProps(state) {
  return {
    postsList: state.profile.posts.postsList,
    draftPostValue: state.profile.posts.draftPost,
    profileData: state.profile.profileData,
    fetchingState: state.profile.fetchingState,
  };
}
const mapDispatchToProps = {
  changeDraftPost,
  addPost,
  setFetchingState,
  setProfileData,
  getProfile,
};
const ProfileStoreContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileApiContainer);

const ProfileUrlContainer = withRouter(ProfileStoreContainer);

export default ProfileUrlContainer;

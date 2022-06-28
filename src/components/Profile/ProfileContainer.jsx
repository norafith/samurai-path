import React from "react";
import Profile from "./Profile";
import withRouter from "./ProfileWithRouter";
import { connect } from "react-redux";
import {
  changeDraftPostActionCreator as changeDraftPost,
  addPostActionCreator as addPost,
  setFetchingStateAC as setFetchingState,
  setProfileDataAC as setProfileData,
} from "../../redux/profileReducer";
import { profileAPI } from "../../api/api";

class ProfileApiContainer extends React.Component {
  getProfile() {
    this.props.setFetchingState(true);
    return profileAPI.getProfile(this.props.params.id).then((result) => {
      this.props.setProfileData(result);
      this.props.setFetchingState(false);
    });
  }

  componentDidMount() {
    this.getProfile();
  }

  componentDidUpdate(prevProps) {
    if (this.props.params.id !== prevProps.params.id) this.getProfile();
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
};
const ProfileStoreContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileApiContainer);

const ProfileUrlContainer = withRouter(ProfileStoreContainer);

export default ProfileUrlContainer;

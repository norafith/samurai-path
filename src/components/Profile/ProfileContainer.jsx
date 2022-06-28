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

class ProfileApiContainer extends React.Component {
  getProfile() {
      this.props.setFetchingState(true);
      return fetch(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.params.id}`, {
        type: "GET",
        headers: {
          "API-KEY": "8ef37fda-1577-4784-a323-4a2da600bd86"
        }
      }).then((result) => result.json())
      .then((result) => {
        this.props.setProfileData(result);
        this.props.setFetchingState(false);
      })
  }

  componentDidMount() {
    this.getProfile();
  }

  componentDidUpdate(prevProps) {
    if (this.props.params.id !== prevProps.params.id) this.getProfile()
  }

  render() {
    return <Profile {...this.props} />
  }
}


function mapStateToProps(state) {
	return {
		postsList: state.profile.posts.postsList,
    draftPostValue: state.profile.posts.draftPost,
    profileData: state.profile.profileData,
    fetchingState: state.profile.fetchingState,
	}
}
const mapDispatchToProps = { changeDraftPost, addPost, setFetchingState, setProfileData };
const ProfileStoreContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileApiContainer);

const ProfileUrlContainer = withRouter(ProfileStoreContainer);

export default ProfileUrlContainer;
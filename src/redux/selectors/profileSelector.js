function getPostsList(state) {
  return state.profile.posts.postsList;
}

function getProfileData(state) {
  return state.profile.profileData;
}

function getProfileFetchingState(state) {
  return state.profile.fetchingState;
}

export { getPostsList, getProfileData, getProfileFetchingState };

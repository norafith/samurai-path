function getCurrUserData(state) {
  return state.auth.currUserData;
}

function getCurrUserId(state) {
  return state.auth.currUserData?.data.id;
}

function getAuthState(state) {
  return state.auth.authState;
}

export { getCurrUserData, getCurrUserId, getAuthState };

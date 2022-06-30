import { authAPI } from "../api/api";

const SET_FETCHING_STATE = "SET_FETCHING_STATE_AUTH";
const SET_CURR_USER_DATA = "SET_CURR_USER_DATA";

let initialState = {
  fetchingState: null,
  currUserData: null,
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CURR_USER_DATA: {
      const stateCopy = { ...state };
      stateCopy.currUserData = action.currUserData;
      return stateCopy;
    }

    case SET_FETCHING_STATE: {
      const stateCopy = { ...state };
      stateCopy.fetchingState = action.fetchingState;

      return stateCopy;
    }

    default: {
      return state;
    }
  }
}

function setCurrUserDataAC(currUserData) {
  return {
    type: SET_CURR_USER_DATA,
    currUserData,
  };
}

function setFetchingStateAC(fetchingState) {
  return {
    type: SET_FETCHING_STATE,
    fetchingState,
  };
}

function authCurrUserThunkCreator() {
  return function authCurrUserThunk(dispatch, getState) {
    dispatch(setFetchingStateAC(true));
    authAPI.authCurrUser().then((result) => {
      dispatch(setCurrUserDataAC(result));
      dispatch(setFetchingStateAC(false));
    });
  };
}

export {
  authReducer,
  setCurrUserDataAC,
  setFetchingStateAC,
  authCurrUserThunkCreator,
};

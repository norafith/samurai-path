import { authAPI } from "../api/api";

const SET_FETCHING_STATE = "SET_FETCHING_STATE_AUTH";
const SET_CURR_USER_DATA = "SET_CURR_USER_DATA";
const SET_AUTH_STATE = "SET_AUTH_STATE";

let initialState = {
  fetchingState: null,
  currUserData: null,
  authState: null,
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CURR_USER_DATA: {
      const stateCopy = { ...state };
      stateCopy.currUserData = action.currUserData;
      debugger;
      return stateCopy;
    }

    case SET_FETCHING_STATE: {
      const stateCopy = { ...state };
      stateCopy.fetchingState = action.fetchingState;
      return stateCopy;
    }

    case SET_AUTH_STATE: {
      const stateCopy = { ...state };
      stateCopy.authState = action.authState;
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

function setAuthStateAC(authState) {
  return {
    type: SET_AUTH_STATE,
    authState,
  };
}

function authCurrUserThunkCreator() {
  return function authCurrUserThunk(dispatch, getState) {
    dispatch(setFetchingStateAC(true));
    authAPI.authCurrUser().then((result) => {
      if (result.resultCode === 0) {
        dispatch(setCurrUserDataAC(result));
        dispatch(setAuthStateAC(true));
      } else {
        dispatch(setAuthStateAC(false));
      }

      dispatch(setFetchingStateAC(false));
    });
  };
}

function loginAuthThunkCreator({ login, password, rememberMe = false }) {
  debugger;
  return function loginAuthThunk(dispatch, setState) {
    return authAPI.loginAuth(login, password, rememberMe).then((result) => {
      if (result.resultCode === 0) {
        dispatch(setCurrUserDataAC(result));
        dispatch(setAuthStateAC(true));
      }
    });
  };
}

export {
  authReducer,
  setCurrUserDataAC,
  setFetchingStateAC,
  authCurrUserThunkCreator,
  loginAuthThunkCreator,
};

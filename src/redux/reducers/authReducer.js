import { authAPI } from "../../api/api";
import { FORM_ERROR } from "final-form";

const SET_FETCHING_STATE = "auth/SET_FETCHING_STATE";
const SET_CURR_USER_DATA = "auth/SET_CURR_USER_DATA";
const SET_AUTH_STATE = "auth/SET_AUTH_STATE";

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
  return async function authCurrUserThunk(dispatch, getState) {
    dispatch(setFetchingStateAC(true));
    const result = await authAPI.authCurrUser();
    if (result.resultCode === 0) {
      dispatch(setCurrUserDataAC(result));
      dispatch(setAuthStateAC(true));
    } else {
      dispatch(setAuthStateAC(false));
    }

    dispatch(setFetchingStateAC(false));
  };
}

function loginAuthThunkCreator({ login, password, rememberMe = false }) {
  return async function loginAuthThunk(dispatch, getState) {
    const result = await authAPI.loginAuth(login, password, rememberMe);
    if (result.resultCode === 0) {
      dispatch(setCurrUserDataAC(result));
      dispatch(setAuthStateAC(true));
    } else {
      return { [FORM_ERROR]: result.messages[0] };
    }
  };
}

function logoutThunkCreator() {
  return async function logoutThunk(dispatch, getState) {
    const result = await authAPI.logout();
    if (result.resultCode === 0) {
      dispatch(setCurrUserDataAC(null));
      dispatch(setAuthStateAC(false));
    }
  };
}

export {
  authReducer,
  setCurrUserDataAC,
  setFetchingStateAC,
  authCurrUserThunkCreator,
  loginAuthThunkCreator,
  logoutThunkCreator,
};

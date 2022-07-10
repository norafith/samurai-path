import { authCurrUserThunkCreator } from "./authReducer";

const APP_INITIALIZED = "APP_INITIALIZED";

const initialState = {
  isInitialized: false,
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case APP_INITIALIZED: {
      const stateCopy = { ...state };
      stateCopy.isInitialized = true;

      return stateCopy;
    }
    default: {
      return state;
    }
  }
}

function appInitializedAC() {
  return {
    type: APP_INITIALIZED,
  };
}

function initializeAppThunkCreator() {
  return function (dispatch, getState) {
    return Promise.all([dispatch(authCurrUserThunkCreator())]).then((result) =>
      dispatch(appInitializedAC())
    );
  };
}

export { appReducer, appInitializedAC, initializeAppThunkCreator };

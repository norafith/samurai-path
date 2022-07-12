const CHANGE_NAVBAR_OPENED_STATUS = "navBar/CHANGE-NAVBAR-OPENED-STATUS";
const TOGGLE_NAVBAR_MOBILE_STATUS = "navBar/TOGGLE-NAVBAR-MOBILE-STATUS";
const REMOVE_NAVBAR_MOBILE_STATUS = "navBar/REMOVE-NAVBAR-MOBILE-STATUS";

const initialState = {
  sectionList: ["Profile", "Dialogs", "Users", "News", "Music", "Settings"],

  openedStatus: true,
  mobileStatus: false,
};

function navBarReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_NAVBAR_OPENED_STATUS: {
      const stateCopy = { ...state };
      stateCopy.openedStatus = !state.openedStatus;

      return stateCopy;
    }

    case TOGGLE_NAVBAR_MOBILE_STATUS: {
      const stateCopy = { ...state };
      stateCopy.mobileStatus = true;
      stateCopy.openedStatus = false;

      return stateCopy;
    }

    case REMOVE_NAVBAR_MOBILE_STATUS: {
      const stateCopy = { ...state };
      stateCopy.mobileStatus = false;
      stateCopy.openedStatus = true;

      return stateCopy;
    }

    default: {
      return state;
    }
  }
}

function changeNavBarOpenedStatusActionCreator() {
  return {
    type: CHANGE_NAVBAR_OPENED_STATUS,
  };
}

function toggleNavBarMobileStatusActionCreator() {
  return {
    type: TOGGLE_NAVBAR_MOBILE_STATUS,
  };
}

function removeNavBarMobileStatusActionCreator() {
  return {
    type: REMOVE_NAVBAR_MOBILE_STATUS,
  };
}

export {
  navBarReducer,
  changeNavBarOpenedStatusActionCreator,
  toggleNavBarMobileStatusActionCreator,
  removeNavBarMobileStatusActionCreator,
};

const CHANGE_NAVBAR_OPENED_STATUS = "CHANGE-NAVBAR-OPENED-STATUS";
const TOGGLE_NAVBAR_MOBILE_STATUS = "TOGGLE-NAVBAR-MOBILE-STATUS";
const REMOVE_NAVBAR_MOBILE_STATUS = "REMOVE-NAVBAR-MOBILE-STATUS";

let initialState = {
      sectionList: [
        "Profile", "Dialogs", "Friends", "News", "Music", "Settings"
      ],

      openedStatus: true,
			mobileStatus: false,
    }

function navBarReducer(state = initialState, action) {
	switch (action.type) {
		case CHANGE_NAVBAR_OPENED_STATUS:
			state.openedStatus = !state.openedStatus;
			break;
		
		case TOGGLE_NAVBAR_MOBILE_STATUS:
			state.mobileStatus = true;
			state.openedStatus = false;
			break;
			
		case REMOVE_NAVBAR_MOBILE_STATUS:
			state.mobileStatus = false;
			state.openedStatus = true;
			break;
	}
	
	return state;
}

function changeNavBarOpenedStatusActionCreator() {
	return {
		type: CHANGE_NAVBAR_OPENED_STATUS,
	}
}


function toggleNavBarMobileStatusActionCreator() {
	return {
		type: TOGGLE_NAVBAR_MOBILE_STATUS,
	}
}

function removeNavBarMobileStatusActionCreator() {
	return {
		type: REMOVE_NAVBAR_MOBILE_STATUS,
	}
}

export { 
	navBarReducer, 
	changeNavBarOpenedStatusActionCreator,
	toggleNavBarMobileStatusActionCreator,
	removeNavBarMobileStatusActionCreator,
};
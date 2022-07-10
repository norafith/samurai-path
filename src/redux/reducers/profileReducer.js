import { profileAPI } from "../../api/api";

const ADD_POST = "ADD-POST";
const SET_FETCHING_STATE = "SET_FETCHING_STATE_PROFILE";
const SET_PROFILE_DATA = "SET_PROFILE_DATA";
const SET_STATUS = "SET_STATUS";

let initialState = {
  posts: {
    postsList: [
      {
        id: 0,
        date: "23.02.2022",
        text: "Sorry for what?",
        likeAmount: 5,
        username: "Bold Master",
      },
      {
        id: 1,
        date: "24.02.2022",
        text: "Our daddy told us not to be ashamed of our dicks, especially since they are such good size and all",
        likeAmount: 25,
        username: "Bold Master",
      },
      {
        id: 2,
        date: "25.02.2022",
        text: "It gets bigger when I pull on it",
        likeAmount: 35,
        username: "Bold Master",
      },
      {
        id: 3,
        date: "25.02.2022",
        text: "Sometimes I pull it on so hard I rip the skin",
        likeAmount: 45,
        username: "Bold Master",
      },
      {
        id: 4,
        date: "26.02.2022",
        text: "Can you show me?",
        likeAmount: 55,
        username: "Bold Master",
      },
    ],
  },

  profileData: null,
  fetchingState: null,
};

function profileReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_POST: {
      let currDate = new Date();
      const days = String(currDate.getDate()).padStart(2, "0");
      const months = String(currDate.getMonth() + 1).padStart(2, "0");
      const year = currDate.getFullYear();
      currDate = `${days}.${months}.${year}`;

      const stateCopy = { ...state };
      stateCopy.posts = { ...state.posts };
      stateCopy.posts.postsList = [...state.posts.postsList];

      let postObj = {
        date: currDate,
        text: action.postText,
        likeAmount: 0,
        username: "Bold Master",
      };

      stateCopy.posts.draftPost = "";
      stateCopy.posts.postsList.push(postObj);

      return stateCopy;
    }

    case SET_FETCHING_STATE: {
      const stateCopy = { ...state };
      stateCopy.fetchingState = action.fetchingState;

      return stateCopy;
    }

    case SET_PROFILE_DATA: {
      const stateCopy = { ...state };
      stateCopy.profileData = action.profileData;
      return stateCopy;
    }

    case SET_STATUS: {
      const stateCopy = { ...state };
      stateCopy.profileData = { ...stateCopy.profileData };
      stateCopy.profileData.status = action.status;
      return stateCopy;
    }

    default: {
      return state;
    }
  }
}

function addPostActionCreator(data) {
  return {
    type: ADD_POST,
    postText: data.postText,
  };
}

function setFetchingStateAC(fetchingState) {
  return {
    type: SET_FETCHING_STATE,
    fetchingState,
  };
}

function setProfileDataAC(profileData) {
  return {
    type: SET_PROFILE_DATA,
    profileData,
  };
}

function setStatusAC(status) {
  return {
    type: SET_STATUS,
    status,
  };
}

function getProfileThunkCreator(id) {
  return function getProfileThunk(dispatch, getState) {
    dispatch(setFetchingStateAC(true));
    return profileAPI.getProfile(id).then((result) => {
      dispatch(setProfileDataAC(result));
      dispatch(setFetchingStateAC(false));
    });
  };
}

function setStatusThunkCreator(status) {
  return function setStatusThunk(dispatch, getState) {
    return profileAPI.setStatus(status).then((result) => {
      if (result.resultCode === 0) {
        dispatch(setStatusAC(status));
      } else {
        throw new Error("Error when submitting new status.");
      }
    });
  };
}

export {
  profileReducer,
  addPostActionCreator,
  setFetchingStateAC,
  setProfileDataAC,
  getProfileThunkCreator,
  setStatusThunkCreator,
};

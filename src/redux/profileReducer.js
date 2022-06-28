const ADD_POST = "ADD-POST";
const CHANGE_DRAFT_POST = "CHANGE-DRAFT-POST";
const SET_FETCHING_STATE = "SET_FETCHING_STATE_PROFILE";
const SET_PROFILE_DATA = "SET_PROFILE_DATA";

let initialState = {
  posts: {
    postsList: [
      {
        date: "23.02.2022",
        text: "Sorry for what?",
        likeAmount: 5,
        username: "Bold Master",
      },
      {
        date: "24.02.2022",
        text: "Our daddy told us not to be ashamed of our dicks, especially since they are such good size and all",
        likeAmount: 25,
        username: "Bold Master",
      },
      {
        date: "25.02.2022",
        text: "It gets bigger when I pull on it",
        likeAmount: 35,
        username: "Bold Master",
      },
      {
        date: "25.02.2022",
        text: "Sometimes I pull it on so hard I rip the skin",
        likeAmount: 45,
        username: "Bold Master",
      },
      {
        date: "26.02.2022",
        text: "Can you show me?",
        likeAmount: 55,
        username: "Bold Master",
      },
    ],

    draftPost: "",
  },

  currUserId: 24584, // should be taken when user signed in
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
        text: stateCopy.posts.draftPost,
        likeAmount: 0,
        username: "Bold Master",
      };

      stateCopy.posts.draftPost = "";
      stateCopy.posts.postsList.push(postObj);

      return stateCopy;
    }

    case CHANGE_DRAFT_POST: {
      const stateCopy = { ...state };
      stateCopy.posts = { ...state.posts };

      stateCopy.posts.draftPost = action.text;

      return stateCopy;
    }

    case SET_FETCHING_STATE: {
      const stateCopy = { ...state };
      stateCopy.fetchingState = action.fetchingState;

      return stateCopy;
    }

    case SET_PROFILE_DATA: {
      debugger;
      const stateCopy = { ...state };
      stateCopy.profileData = action.profileData;
      return stateCopy;
    }

    default: {
      return state;
    }
  }
}

function addPostActionCreator() {
  return {
    type: ADD_POST,
  };
}

function changeDraftPostActionCreator(text) {
  return {
    type: CHANGE_DRAFT_POST,
    text,
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

export {
  profileReducer,
  addPostActionCreator,
  changeDraftPostActionCreator,
  setFetchingStateAC,
  setProfileDataAC,
};

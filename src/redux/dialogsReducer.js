import { usersAPI } from "../api/api";

const ADD_MESSAGE = "ADD-MESSAGE";
const CHANGE_SEARCH_TEXT = "CHANGE-SEARCH-TEXT";
const SET_CHAT_OPTIONS = "SET_CHAT_OPTIONS";
const SET_FETCHING_STATE = "SET_FETCHING_STATE_DIALOGS";

const initialState = {
  chatOptions: [],

  shownChatOptions: [], // data should be taken from server

  // curr user id = 2
  messages: {
    messagesList: [
      { text: "zdarova)", messageID: 1, userID: 1 },
      { text: "che po mateshe?", messageID: 2, userID: 1 },
      { text: "shya glyanu", messageID: 3, userID: 2 },
      { text: "zhdu (waiting)", messageID: 4, userID: 1 },
      { text: "N. 135, 255, 666", messageID: 5, userID: 2 },
      { text: "spasibo, bratishka <3", messageID: 6, userID: 1 },
    ],
  },

  draftSearch: "",
  fetchingState: null,
};

function dialogsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_MESSAGE: {
      const stateCopy = { ...state };
      stateCopy.messages = { ...state.messages };
      stateCopy.messages.messagesList = [...state.messages.messagesList];

      const currMessageID = 22222;
      // should be calculated with server data

      const messageObj = {
        text: action.messageText,
        messageID: currMessageID,
        userID: 2, // curr user id = 2
      };

      stateCopy.messages.messagesList.push(messageObj);

      return stateCopy;
    }

    case CHANGE_SEARCH_TEXT: {
      const stateCopy = { ...state };
      stateCopy.draftSearch = action.text;
      stateCopy.shownChatOptions = { ...state.shownChatOptions };
      let draftSearch = stateCopy.draftSearch;
      stateCopy.shownChatOptions = state.chatOptions.filter(
        (option) =>
          draftSearch === "" ||
          option.name.toLowerCase().includes(draftSearch.toLowerCase())
      );

      return stateCopy;
    }

    case SET_CHAT_OPTIONS: {
      let stateCopy = { ...state };
      stateCopy.chatOptions = [...action.chatOptions];
      stateCopy.shownChatOptions = [...action.chatOptions];
      return stateCopy;
    }

    case SET_FETCHING_STATE: {
      let stateCopy = { ...state };
      stateCopy.fetchingState = action.fetchingState;
      return stateCopy;
    }

    default: {
      return state;
    }
  }
}

function addMessageActionCreator(data) {
  return {
    type: ADD_MESSAGE,
    messageText: data.message,
  };
}

function changeSearchTextActionCreator(searchText) {
  return {
    type: CHANGE_SEARCH_TEXT,
    text: searchText,
  };
}

function setChatOptionsAC(chatOptions) {
  return {
    type: SET_CHAT_OPTIONS,
    chatOptions: chatOptions,
  };
}

function setFetchingStateAC(fetchingState) {
  return {
    type: SET_FETCHING_STATE,
    fetchingState,
  };
}

function getFriendsThunkCreator() {
  return function getFriendsThunk(dispatch, getState) {
    dispatch(setFetchingStateAC(true));
    usersAPI.getFriends().then((result) => {
      dispatch(setChatOptionsAC(result.items));
      dispatch(setFetchingStateAC(false));
    });
  };
}

export {
  dialogsReducer,
  addMessageActionCreator,
  setChatOptionsAC,
  changeSearchTextActionCreator,
  setFetchingStateAC,
  getFriendsThunkCreator,
};

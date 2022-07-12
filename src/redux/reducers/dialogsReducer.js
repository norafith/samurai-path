import { usersAPI } from "../../api/api";

const ADD_MESSAGE = "dialogs/ADD-MESSAGE";
const CHANGE_SEARCH_TEXT = "dialogs/CHANGE-SEARCH-TEXT";
const SET_CHAT_OPTIONS = "dialogs/SET_CHAT_OPTIONS";
const SET_FETCHING_STATE = "dialogs/SET_FETCHING_STATE";
const DELETE_MESSAGE = "dialogs/DELETE_MESSAGE";

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

    case DELETE_MESSAGE: {
      let stateCopy = { ...state };
      stateCopy.messages = { ...state.messages };
      stateCopy.messages.messagesList = [...state.messages.messagesList];
      let messageIndex;
      for (let index in stateCopy.messages.messagesList) {
        if (
          stateCopy.messages.messagesList[index].messageID === action.messageId
        ) {
          messageIndex = index;
          break;
        }
      }
      stateCopy.messages.messagesList.splice(messageIndex, 1);
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
  return async function getFriendsThunk(dispatch, getState) {
    dispatch(setFetchingStateAC(true));
    const result = await usersAPI.getFriends();
    dispatch(setChatOptionsAC(result.items));
    dispatch(setFetchingStateAC(false));
  };
}

function deleteMessageAC(messageId) {
  return {
    type: DELETE_MESSAGE,
    messageId,
  };
}

export {
  dialogsReducer,
  addMessageActionCreator,
  setChatOptionsAC,
  changeSearchTextActionCreator,
  setFetchingStateAC,
  getFriendsThunkCreator,
  deleteMessageAC,
};

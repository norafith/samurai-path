// import { usersList } from "./usersReducer";

const ADD_MESSAGE = "ADD-MESSAGE";
const CHANGE_DRAFT_MESSAGE = "CHANGE-DRAFT-MESSAGE";
const CHANGE_SEARCH_TEXT = "CHANGE-SEARCH-TEXT";

const initialState = {
  chatOptions: [{ userID: 3, name: "Ira" }],

  shownChatOptions: [{ userID: 3, name: "Ira" }], // data should be taken from server

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

    draftMessage: "",
  },

  draftSearch: "",
};

function dialogsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_MESSAGE: {
      const stateCopy = { ...state };
      stateCopy.messages = { ...state.messages };
      stateCopy.messages.messagesList = [...state.messages.messagesList];

      const currMessageID = 22222;
      // TODO

      const messageObj = {
        text: stateCopy.messages.draftMessage,
        messageID: currMessageID,
        userID: 2, // curr user id = 2
      };

      stateCopy.messages.messagesList.push(messageObj);
      stateCopy.messages.draftMessage = "";

      return stateCopy;
    }

    case CHANGE_DRAFT_MESSAGE: {
      const stateCopy = { ...state };
      stateCopy.messages = { ...state.messages };
      stateCopy.messages.draftMessage = action.text;

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

    default: {
      return state;
    }
  }
}

function addMessageActionCreator() {
  return {
    type: ADD_MESSAGE,
  };
}

function changeDraftMessageActionCreator(messageText) {
  return {
    type: CHANGE_DRAFT_MESSAGE,
    text: messageText,
  };
}

function changeSearchTextActionCreator(searchText) {
  return {
    type: CHANGE_SEARCH_TEXT,
    text: searchText,
  };
}

export {
  dialogsReducer,
  addMessageActionCreator,
  changeDraftMessageActionCreator,
  changeSearchTextActionCreator,
};

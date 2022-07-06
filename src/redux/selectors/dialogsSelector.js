function getMessagesList(state) {
  return state.dialogs.messages.messagesList;
}

function getShownChatOptions(state) {
  return state.dialogs.shownChatOptions;
}

function getDialogsSearchText(state) {
  return state.dialogs.searchText;
}

function getDialogsFetchingState(state) {
  return state.dialogs.fetchingState;
}

export {
  getMessagesList,
  getShownChatOptions,
  getDialogsSearchText,
  getDialogsFetchingState,
};

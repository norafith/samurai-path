import {
  changeSearchTextActionCreator,
  dialogsReducer,
  deleteMessageAC,
} from "../dialogsReducer";

it("search test #1", () => {
  const state = {
    shownChatOptions: [],
    chatOptions: [{ name: "Sasha" }, { name: "Alina" }, { name: "Jora" }],
  };
  const action = changeSearchTextActionCreator("as");
  const newState = dialogsReducer(state, action);
  expect(newState.shownChatOptions).toStrictEqual([{ name: "Sasha" }]);
});

it("search test #2", () => {
  const state = {
    shownChatOptions: [],
    chatOptions: [
      { name: "John" },
      { name: "Kirito" },
      { name: "Mark" },
      { name: "Saitama" },
    ],
  };
  const action = changeSearchTextActionCreator("ma");
  const newState = dialogsReducer(state, action);
  expect(newState.shownChatOptions).toStrictEqual([
    { name: "Mark" },
    { name: "Saitama" },
  ]);
});

it("delete message", () => {
  const state = {
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
  };
  const messageId = 3;
  const action = deleteMessageAC(messageId);
  const newState = dialogsReducer(state, action);
  expect(newState.messages.messagesList).not.toStrictEqual(
    expect.arrayContaining([{ text: "shya glyanu", messageID: 3, userID: 2 }])
  );
});

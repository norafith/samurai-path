import { friendsList } from "./friendsReducer";

const ADD_MESSAGE = "ADD-MESSAGE";
const CHANGE_DRAFT_MESSAGE = "CHANGE-DRAFT-MESSAGE";

let initialState =   {
      chatOptions: [
        ...friendsList,
      ],
  
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
      }
    } 


function dialogsReducer(state = initialState, action) {
	switch (action.type) {
		case ADD_MESSAGE:
			let currMessageID = 22222;
			// TODO
				
			let messageObj = {
				text: state.messages.draftMessage,
				messageID: currMessageID,
				userID: 2 // curr user id = 2
			};
				
			state.messages.messagesList.push(messageObj);
			state.messages.draftMessage = "";
			break;
		case CHANGE_DRAFT_MESSAGE:
			state.messages.draftMessage = action.text;
			break;
	}
	
	return state;
}

function addMessageActionCreator() {
	return {
		type: ADD_MESSAGE,
	}
}	
	
function changeDraftMessageActionCreator(messageText) {
	return {
		type: CHANGE_DRAFT_MESSAGE,
		text: messageText,
	}
}

export { dialogsReducer, addMessageActionCreator, changeDraftMessageActionCreator };
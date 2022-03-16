import { dialogsReducer } from "./dialogsReducer";
import { profileReducer } from "./profileReducer";
import { navBarReducer } from "./navBarReducer";

const friendsList = [
  { userID: 1, name: "Sasha", onlineStatus: true },
  { userID: 2, name: "Julia", onlineStatus: true },
  { userID: 3, name: "Ira", onlineStatus: false },
  { userID: 4, name: "Mark", onlineStatus: false },
  { userID: 5, name: "John", onlineStatus: true },
]

const store = {
  _state: {
    profile: {
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
    },
  
    dialogs: {
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
    },
  
    friends: friendsList,
  
    navBar: {
      sectionList: [
        "Profile", "Dialogs", "Friends", "News", "Music", "Settings"
      ],

      openedStatus: true,
			mobileStatus: false,
    },

  },

 _launchObserver() {
    console.log("there are no subscribers!");
  },

  subscribe(observer) {
    this._launchObserver = observer; // observer pattern
  },
	
	get state() {
    return {...store._state};
  },
	
	get navBarMobileStatus() {
    return !!(this._state.navBar.mobileStatus);
  },
	
  get navBarOpenedStatus() {
    return !!(this._state.navBar.openedStatus);
  },

	
	dispatch(action) {
		this._state.dialogs = dialogsReducer(this._state.dialogs, action);
		this._state.profile = profileReducer(this.state.profile, action);
		this._state.navBar = navBarReducer(this._state.navBar, action);
		
		this._launchObserver();
	
	}		
}

export default store;

window.store = store;
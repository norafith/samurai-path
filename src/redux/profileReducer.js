const ADD_POST = "ADD-POST";
const CHANGE_DRAFT_POST = "CHANGE-DRAFT-POST";

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
    }
  

function profileReducer(state = initialState, action) {
	switch (action.type) {
		case ADD_POST:					
			let currDate = new Date();
			let days = String(currDate.getDate()).padStart(2, "0");
			let months = String(currDate.getMonth() + 1).padStart(2, "0");
			let year = currDate.getFullYear();
			currDate = `${days}.${months}.${year}`;
			let postObj = {
				date: currDate,
				text: state.posts.draftPost,
				likeAmount: 0,
				username: "Bold Master",
			}
			state.posts.draftPost = "";
			state.posts.postsList.push(postObj);
			break;
		
		case CHANGE_DRAFT_POST:
			state.posts.draftPost = action.text;
			break;

    default:
      
	}
	
	return state;
}


function addPostActionCreator() {
	return {
		type: ADD_POST,
	}
}

function changeDraftPostActionCreator(postText) {
	return {
		type: CHANGE_DRAFT_POST,
		text: postText,
	}
}


export { profileReducer, addPostActionCreator, changeDraftPostActionCreator }
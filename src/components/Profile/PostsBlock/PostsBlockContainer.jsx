import { addPostActionCreator, changeDraftPostActionCreator } from "../../../redux/profileReducer";
import PostsBlock from "./PostsBlock";
import { connect } from "react-redux";


// function PostsBlockContainer(props) {
// 	function createBtnHandler() {
//     props.store.dispatch(addPostActionCreator());
//   }

//   function textareaInputHandler(text) {
//     props.store.dispatch(changeDraftPostActionCreator(text));
//   }

// 	return <PostsBlock 
// 		postsList={props.store.getState().profile.posts.postsList} 
// 		draftPostValue={props.store.getState().profile.posts.draftPost}
// 		textareaInputHandler={textareaInputHandler}
// 		createBtnHandler={createBtnHandler} 
// 	/>
// }

function mapStateToProps(state) {
	return {
		postsList: state.profile.posts.postsList,
		draftPostValue: state.profile.posts.draftPost,
	}
}

function mapDispatchToProps(dispatch) {
	return {
		changeDraftPost(text) {
			dispatch(changeDraftPostActionCreator(text));
		},

		addPost() {
			dispatch(addPostActionCreator());
		}
	}
}

const PostsBlockContainer = connect(mapStateToProps, mapDispatchToProps)(PostsBlock);

export default PostsBlockContainer;
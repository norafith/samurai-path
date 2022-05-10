import React from "react";
import { addPostActionCreator, changeDraftPostActionCreator } from "../../../redux/profileReducer";
import PostsBlock from "./PostsBlock";

function PostsBlockContainer(props) {
	function createBtnHandler() {
    props.store.dispatch(addPostActionCreator());
  }

  function textareaInputHandler(text) {
    props.store.dispatch(changeDraftPostActionCreator(text));
  }

	return <PostsBlock 
		postsList={props.store.getState().profile.posts.postsList} 
		draftPostValue={props.store.getState().profile.posts.draftPost}
		textareaInputHandler={textareaInputHandler}
		createBtnHandler={createBtnHandler} 
	/>
}

export default PostsBlockContainer;
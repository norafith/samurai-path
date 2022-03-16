import React from "react";
import classes from "./PostsBlock.module.css";
import Post from "./Post/Post";
import CreatePost from "./CreatePost/CreatePost";

function PostsBlock(props) {
  const postsElements = props.store.getState().profile.posts.postsList.map((post) => <Post date={post.date} text={post.text} likeAmount={post.likeAmount} username={post.username} />)
	
  return (
    <section className={classes.postsBlock}>
      <CreatePost store={props.store} />
      <div className={classes.postsList}>
        {postsElements}
      </div>
    </section>
  )
}

export default PostsBlock;
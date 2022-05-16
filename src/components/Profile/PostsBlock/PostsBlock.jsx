import classes from "./PostsBlock.module.css";
import Post from "./Post/Post";
import CreatePost from "./CreatePost/CreatePost"

function PostsBlock(props) {
  const postsElements = props.postsList.map(
    (post) => { 
      return (
        <Post 
          date={post.date} 
          text={post.text} 
          likeAmount={post.likeAmount} 
          username={post.username} />
      )
    }
  )
	
  return (
    <section className={classes.postsBlock}>
      <CreatePost
        draftPostValue={props.draftPostValue}
        changeDraftPost={props.changeDraftPost}
        createBtnHandler={props.createBtnHandler}
        addPost={props.addPost}
      />
      <div className={classes.postsList}>
        {postsElements}
      </div>
    </section>
  )
}

export default PostsBlock;
import MainUserInfo  from "./MainUserInfo/MainUserInfo"
import UserDescription from "./UserDescription/UserDescription";
import PostsBlock from "./PostsBlock/PostsBlock";
import classes from "./Profile.module.css";
import Preloader from "../common/Preloader/Preloader";
import LookingForAJob from "./LookingForAJobBlock/LookingForAJobBlock";
import Contacts from "./Contacts/Contacts";

function Profile(props) {
  if (props.fetchingState === null || props.fetchingState) return <Preloader />
  
  return (
    <main className={classes.profile}>
      <MainUserInfo
        photo={props.profileData.photos.large}
        fullName={props.profileData.fullName}
        userId={props.profileData.userId}
      />
      <UserDescription
        aboutMe={props.profileData.aboutMe}
      />
      <PostsBlock
        postsList={props.postsList}
        draftPostValue={props.draftPostValue}
        changeDraftPost={props.changeDraftPost}
        createBtnHandler={props.createBtnHandler}
        addPost={props.addPost}
      />
      <LookingForAJob
        lookingForAJob={props.profileData.lookingForAJob}
        lookingForAJobDescription={props.profileData.lookingForAJobDescription}
      />
      <Contacts
        contacts={props.profileData.contacts}
      />
    </main>
  )
}

export default Profile;
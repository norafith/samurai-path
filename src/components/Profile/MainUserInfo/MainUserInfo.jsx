import classes from "./MainUserInfo.module.css";
import user from "../../../assets/user.png";
import Status from "./Status/Status";

function MainUserInfo(props) {
  function onImageSelected(e) {
    props.changeAvatarPhoto(e.target.files[0]);
  }

  return (
    <section className={classes.mainUserInfo}>
      <section className={classes.userInfoContainer}>
        <img
          className={classes.userLogo}
          src={props.photo || user}
          alt="user logo"
        />
        <div className={classes.userProperties}>
          <div className={classes.username}>{props.fullName}</div>
          <Status
            status={props.status}
            setStatus={props.setStatus}
            isCurrUserPage={props.isCurrUserPage}
          />
        </div>
      </section>
      {props.isCurrUserPage && (
        <input
          type="file"
          accept="image/png, image/jpeg, image/jpg"
          title="Choose avatar"
          onChange={onImageSelected}
        />
      )}
    </section>
  );
}

export default MainUserInfo;

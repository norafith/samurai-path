import classes from "./MainUserInfo.module.css";
import user from "../../../assets/user.png";
import Status from "./Status/Status";

function MainUserInfo(props) {
  return (
    <section className={classes.mainUserInfo}>
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
  );
}

export default MainUserInfo;

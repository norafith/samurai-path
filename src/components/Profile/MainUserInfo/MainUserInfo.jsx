import classes from "./MainUserInfo.module.css"
import user from "../../../assets/user.png";

function MainUserInfo(props) {
  return (
    <section className={classes.mainUserInfo}>
      <img
        className={classes.userLogo}
        src={props.photo || user}
        alt="user logo"
      />
      <div className={classes.userProperties}>
        <div className={classes.username}>
          {props.fullName}
        </div>
        <div className={classes.status}>{ props.status || "No status."}</div>
      </div>
    </section>
  );
}

export default MainUserInfo;
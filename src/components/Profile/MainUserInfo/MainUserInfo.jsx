import classes from "./MainUserInfo.module.css"

function MainUserInfo() {
  return (
    <section className={classes.mainUserInfo}>
      <img
        className={classes.userLogo}
        src="https://news.store.rambler.ru/img/cf6e2a13af3568f2318193573cb0b37d?img-format=auto&img-1-resize=height:355,fit:max&img-2-filter=sharpen"
        alt="user logo"
      />
      <div className={classes.userProperties}>
        <span className={classes.username}>
          <span className={classes.firstName}>Billy</span>
          <span className={classes.familyName}>Herrington</span>
        </span>
        <span className={classes.age}>30</span>
      </div>
    </section>
  );
}

export default MainUserInfo;
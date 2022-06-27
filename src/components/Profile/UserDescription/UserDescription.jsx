import classes from "./UserDescription.module.css"

function UserDescription(props) {
  if (!props.aboutMe) return;
  
  return (
    <section className={classes.userDescription}>
      <h3>About me</h3>
      <p className={classes.userIntroduction}>
        {props.aboutMe}
      </p>
    </section>
  );
}

export default UserDescription;
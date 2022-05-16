import classes from "./UserDescription.module.css"

function UserDescription() {
  return (
    <section className={classes.userDescription}>
      <h3>Introduction</h3>
      <p className={classes.userIntroduction}>
        I, Billy Herrington, stand here today, humbled by the task before us,
        mindful of the sacrifices borne by our Nico Nico ancestors. We are in
        the midst of a crisis. Nico Nico Douga is at war against a far-reaching
        storm of disturbance and deletion. Nico Nico's economy is badly
        weakened: a consequence of carelessness and irresponsibility on the part
        of acknowledgement, but also on the collective failure to make hard
        choices and to prepare for a new, MAD age.
      </p>
    </section>
  );
}

export default UserDescription;
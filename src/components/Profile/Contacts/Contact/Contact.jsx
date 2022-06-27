import classes from "./Contact.module.css";

function Contact(props) {
  if (props.socialNetworkName === "mainLink") return;
  if (!props.socialNetworkLink) return;

  return <div className={classes.contactContainer}>
    <img className={ classes.logo } src={props.logo} alt="social network logo" />
    <a href={"https://" + props.socialNetworkLink} target="_blank" rel="noreferrer">{props.socialNetworkLink}</a>
  </div>
}

export default Contact;
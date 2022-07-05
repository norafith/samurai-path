import classes from "./Logout.module.css";

function Logout(props) {
  return (
    <li
      onClick={props.logout}
      style={!props.authState ? { display: "none" } : {}}
      className={classes.logout}
    >
      Logout
    </li>
  );
}

export default Logout;

import classes from "./NavBar.module.css";
import NavOption from "./NavOption/NavOption";
import LogoutContainer from "./Logout/LogoutContainer";

function NavBar(props) {
  const navElements = props.sectionList.map((option) =>
    option === "Profile" ? (
      <NavOption name={option} key={option} currUserId={props.currUserId} />
    ) : (
      <NavOption name={option} key={option} />
    )
  );

  let navBarClass = classes.navbar;
  if (props.mobileStatus) {
    navBarClass += " " + classes.mobile;
  }

  if (props.navBarOpenedStatus) {
    navBarClass += " " + classes.active;
  }

  return (
    <nav className={navBarClass}>
      <div
        onClick={props.changeNavBarOpenedStatus}
        className={classes.closeBtn}
      >
        X
      </div>
      <ul className={classes.menu}>
        {navElements}
        <LogoutContainer />
      </ul>
    </nav>
  );
}

export default NavBar;

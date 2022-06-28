import classes from "./Header.module.css";
import logo from "./logo.png";
import menu from "../../assets/menu.png";

function Header(props) {
  let headerClass = classes.header;

  if (props.mobileStatus) {
    headerClass += " " + classes.mobile;
  }

  let menuBtnDisplay;
  if (props.mobileStatus) {
    menuBtnDisplay = "block";
  } else {
    menuBtnDisplay = "none";
  }

  return (
    <header className={headerClass}>
      <img
        className={classes.menuBtn}
        src={menu}
        alt="menu"
        onClick={props.changeNavBarOpenedStatus}
        style={{ display: menuBtnDisplay }}
      />
      <img className={classes.logo} src={logo} alt="site logo" />
    </header>
  );
}

export default Header;

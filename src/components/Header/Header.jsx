import classes from "./Header.module.css"
import logo from "./logo.png"

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
      <div className={classes.menuBtn} onClick={props.changeNavBarOpenedStatus} style={{display: menuBtnDisplay}}>Menu</div>
			<img className={classes.logo}
        src={logo}
				alt="site logo"
      />
    </header>
  );
}

export default Header;
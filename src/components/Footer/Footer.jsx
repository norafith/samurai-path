import React from "react";
import classes from "./Footer.module.css"

function Footer() {
  return (
    <footer className={classes.footer}>
      <span>
        made by <a className={classes.authorLink}>norafith</a>
      </span>
    </footer>
  );
}

export default Footer;

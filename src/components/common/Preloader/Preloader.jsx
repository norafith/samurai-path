import classes from "./Preloader.module.css";
import preloader from "./preloader.gif";

function Preloader(props) {
  return <img alt="preloader" className={ classes.preloader } src={preloader}></img>
}

export default Preloader;
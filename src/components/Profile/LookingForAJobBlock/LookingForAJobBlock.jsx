import classes from "./LookingForAJobBlock.module.css";

function LookingForAJob(props) {
  const answerElem = props.lookingForAJob ? 
    <span className={classes.answer + " " + classes.yes}>Yes</span> :
    <span className={classes.answer + " " + classes.no}>No</span>
  
  const lookingForAJobDescriptionElem = props.lookingForAJobDescription ?
    <p className={classes.lookingForAJobDescription}>
      {props.lookingForAJobDescription}
    </p> : "";
  
  return <section>
    <div>
      Looking for a job: { answerElem }
    </div>
    {lookingForAJobDescriptionElem}
  </section>
}

export default LookingForAJob;
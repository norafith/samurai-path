import classes from "./PageControl.module.css";

function PageControl(props) {
  const pageControlElements = [];
  for (
    let i = 1 + props.currentPageControlOffset;
    i <= 5 + props.currentPageControlOffset;
    i++
  ) {
    let className = classes.pageControlButton;
    if (props.currentPage === i) {
      className += " " + classes.active;
    }

    pageControlElements.push(
      <span
        key={i}
        className={className}
        onClick={() => {
          props.changeCurrentPage(i);
          props.loadItems(i);
        }}
      >
        {i}
      </span>
    );
  }
  return (
    <div>
      <span
        className={classes.pageOffset}
        onClick={() => props.changeCurrentPageControlOffset(false)}
      >
        {"<"}
      </span>
      {pageControlElements}
      <span
        className={classes.pageOffset}
        onClick={() => props.changeCurrentPageControlOffset(true)}
      >
        {">"}
      </span>
    </div>
  );
}

export default PageControl;

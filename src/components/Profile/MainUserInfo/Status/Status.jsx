import React from "react";
import classes from "./Status.module.css";

class Status extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      changeMode: false,
      currStatus: this.props.status || "",
    };
  }

  statusInputRef = React.createRef();

  disableChangeMode() {
    this.setState({ changeMode: false });
    this.props.setStatus(this.state.currStatus);
  }

  enableChangeMode() {
    this.setState({ changeMode: true });
  }

  statusInputHandler(e) {
    this.setState({ currStatus: this.statusInputRef.current.value });
  }

  render() {
    debugger;
    return (
      <div
        className={
          this.props.isCurrUserPage ? classes.currUserStatusContainer : ""
        }
      >
        {this.state.changeMode ? (
          <input
            autoFocus={true}
            onBlur={this.disableChangeMode.bind(this)}
            onInput={this.statusInputHandler.bind(this)}
            value={this.state.currStatus}
            ref={this.statusInputRef}
            type="text"
          />
        ) : (
          <div
            onDoubleClick={
              this.props.isCurrUserPage
                ? this.enableChangeMode.bind(this)
                : () => {}
            }
            className={classes.status}
          >
            {this.props.status || "No status."}
          </div>
        )}
      </div>
    );
  }
}

export default Status;

import React, { useState } from "react";
import classes from "./Status.module.css";

function Status(props) {
  let [changeMode, setChangeMode] = useState(false);
  let [currStatus, setCurrStatus] = useState(props.status || "");

  const statusInputRef = React.createRef();

  function disableChangeMode() {
    setChangeMode(false);
    props.setStatus(currStatus);
  }

  function enableChangeMode() {
    setChangeMode(true);
  }

  function statusInputHandler(e) {
    setCurrStatus(statusInputRef.current.value);
  }

  return (
    <div
      className={props.isCurrUserPage ? classes.currUserStatusContainer : ""}
    >
      {changeMode ? (
        <input
          autoFocus={true}
          onBlur={disableChangeMode}
          onInput={statusInputHandler}
          value={currStatus}
          ref={statusInputRef}
          type="text"
        />
      ) : (
        <div
          onDoubleClick={props.isCurrUserPage ? enableChangeMode : () => {}}
          className={classes.status}
        >
          {currStatus || "No status."}
        </div>
      )}
    </div>
  );
}

// class Status extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       changeMode: false,
//       currStatus: this.props.status || "",
//     };
//   }

//   statusInputRef = React.createRef();

//   disableChangeMode() {
//     this.setState({ changeMode: false });
//     this.props.setStatus(this.state.currStatus);
//   }

//   enableChangeMode() {
//     this.setState({ changeMode: true });
//   }

//   statusInputHandler(e) {
//     this.setState({ currStatus: this.statusInputRef.current.value });
//   }

//   render() {
//     return (
//       <div
//         className={
//           this.props.isCurrUserPage ? classes.currUserStatusContainer : ""
//         }
//       >
//         {this.state.changeMode ? (
//           <input
//             autoFocus={true}
//             onBlur={this.disableChangeMode.bind(this)}
//             onInput={this.statusInputHandler.bind(this)}
//             value={this.state.currStatus}
//             ref={this.statusInputRef}
//             type="text"
//           />
//         ) : (
//           <div
//             onDoubleClick={
//               this.props.isCurrUserPage
//                 ? this.enableChangeMode.bind(this)
//                 : () => {}
//             }
//             className={classes.status}
//           >
//             {this.props.status || "No status."}
//           </div>
//         )}
//       </div>
//     );
//   }
// }

export default Status;

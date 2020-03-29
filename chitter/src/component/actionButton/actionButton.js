import React from "react";

const ActionButton = ({ peepSwitch, test }) => {
  return (
    <div className="fixed-action-btn" onClick={peepSwitch}>
      <a
        className={
          test ? "btn-floating btn-large red" : "btn-floating btn-large blue"
        }
      >
        <i className="large material-icons">mode_edit</i>
      </a>
    </div>
  );
};

export default ActionButton;

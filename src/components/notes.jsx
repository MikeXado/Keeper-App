import React from "react";

function Notes(props) {
  return (
    <div className="cards-item">
      <div className="card-title">{props.text}</div>
      <div className="card-description">{props.content}</div>
      <div
        className="card-btn"
        onClick={() => {
          props.removeNotes(props.id);
        }}
      >
        Remove note
      </div>
    </div>
  );
}

export { Notes };

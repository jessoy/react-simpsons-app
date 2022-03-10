import React, { Component } from "react";

class Delete extends Component {
  render() {
    return (
      <div className="delete">
        <button
          onClick={() => {
            this.props.hideCharacter();
          }}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Delete;

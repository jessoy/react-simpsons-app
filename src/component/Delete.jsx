import React, { Component } from "react";

class Delete extends Component {
  render() {
    const { characterData, hideCharacter } = this.props;

    return (
      <div className="delete">
        <button
          onClick={() => {
            hideCharacter(characterData);
          }}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Delete;

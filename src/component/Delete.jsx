import React, { Component } from "react";

class Delete extends Component {
  render() {
    const { characterData } = this.props;

    return (
      <div className="delete">
        <button
          onClick={() => {
            this.props.hideCharacter(characterData);
          }}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Delete;

import React, { Component } from "react";

class Delete extends Component {
  render() {
    const { character } = this.props;

    return (
      <div className="delete">
        <button
          onClick={() => {
            this.props.hideCharacter(character);
          }}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Delete;

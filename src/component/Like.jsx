import React, { Component } from "react";

class Like extends Component {
  render() {
    const { character } = this.props;

    return (
      <>
        <button
          onClick={() => {
            this.props.onLike(character);
          }}
        >
          {character.liked ? "Dislike" : "Like"}
        </button>
      </>
    );
  }
}

export default Like;

import React, { Component } from "react";

class Like extends Component {
  render() {
    const { characterData, onLike } = this.props;

    return (
      <>
        <button
          onClick={() => {
            onLike(characterData);
          }}
        >
          {characterData.liked ? "Dislike" : "Like"}
        </button>
      </>
    );
  }
}

export default Like;

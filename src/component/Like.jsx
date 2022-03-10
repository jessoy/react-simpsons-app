import React, { Component } from "react";

class Like extends Component {
  render() {
    const { characterData } = this.props;

    return (
      <>
        <button
          onClick={() => {
            this.props.onLike(characterData);
          }}
        >
          {characterData.liked ? "Dislike" : "Like"}
        </button>
      </>
    );
  }
}

export default Like;

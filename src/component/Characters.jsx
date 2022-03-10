import React, { Component } from "react";
import Character from "./Character";
import "./characters.scss"

class Characters extends Component {
  render() {
    const { data, onLike, hideCharacter } = this.props;

    return (
      <>
        {data.map((item, index) => {
          return (
            <div className="character" key={index}>
              <Character characterData={item} onLike={onLike} hideCharacter={hideCharacter} />
            </div>
          );
        })}
      </>
    );
  }
}

export default Characters;

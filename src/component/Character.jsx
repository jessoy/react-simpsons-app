import React, { Component } from "react";
import Name from "./Name";
import Quote from "./Quote";
import Image from "./Image";
import Delete from "./Delete";

class Character extends Component {
  state = { deleted: false };

  render() {
    const { characterData, onLike, hideCharacter } = this.props;
    const { deleted } = this.state;

    return (
      <>
        {!deleted ? (
          <>
            <Name name={characterData.character} />
            <div className={characterData.characterDirection}>
              <Quote onLike={onLike} characterData={characterData}/>
              <Image image={characterData.image} />
            </div>
            <Delete hideCharacter={hideCharacter} characterData={characterData}/>
          </>
        ) : null}
      </>
    );
  }
}

export default Character;

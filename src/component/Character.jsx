import React, { Component } from "react";
import Name from "./Name";
import Quote from "./Quote";
import Image from "./Image";
import Delete from "./Delete";

class Character extends Component {
  state = { deleted: false };

  hideCharacter = () => {
    this.setState({ deleted: !this.state.deleted });
  };

  render() {
    const { data } = this.props;
    const { deleted } = this.state;

    return (
      <>
        {!deleted ? (
          <>
            <Name name={data.character} />
            <div className={data.characterDirection}>
              <Quote quote={data.quote} />
              <Image image={data.image} />
            </div>
            <Delete hideCharacter={this.hideCharacter}/>
          </>
        ) : null}
      </>
    );
  }
}

export default Character;

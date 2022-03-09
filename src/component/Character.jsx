import React, { Component } from "react";
import Name from "./Name";
import Quote from "./Quote";
import Image from "./Image";
import Delete from "./Delete";

class Character extends Component {
  render() {
    const { data } = this.props;

    return (
      <>
        <Name name={data.character} />
        <div className={data.characterDirection}>
          <Quote quote={data.quote} />
          <Image image={data.image} />
        </div>
        <Delete />
      </>
    );
  }
}

export default Character;

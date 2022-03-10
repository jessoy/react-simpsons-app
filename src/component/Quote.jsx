import React, { Component } from "react";
import Text from "./Text";
import Like from "./Like";

class Quote extends Component {

  render() {
    const { quote, onLike, character } = this.props;

    return (
      <div className="quote">
        <p>{quote}</p>

        <Like onLike={onLike} character={character}/>
        {character.liked ? <Text /> : null}

      </div>
    );
  }
}

export default Quote;

import React, { Component } from "react";
import Text from "./Text";
import Like from "./Like";

class Quote extends Component {

  render() {
    const { onLike, characterData } = this.props;

    return (
      <div className="quote">
        <p>{characterData.quote}</p>

        <Like onLike={onLike} characterData={characterData}/>
        {characterData.liked ? <Text /> : null}

      </div>
    );
  }
}

export default Quote;

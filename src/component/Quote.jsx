import React, { Component } from "react";
import Text from "./Text";
import Like from "./Like";

class Quote extends Component {
  render() {
    const { quote } = this.props;

    return (
      <div className="quote">
        <p>{quote}</p>
        <Text />
        <Like />
      </div>
    );
  }
}

export default Quote;

import React, { Component } from "react";
import Text from "./Text";
import Like from "./Like";

class Quote extends Component {
  state = { liked: false };

  toggleText = () => {
    this.setState({ liked: !this.state.liked });
  };

  render() {
    const { quote } = this.props;
    const { liked } = this.state;

    return (
      <div className="quote">
        <p>{quote}</p>
        {liked ? <Text /> : null}
        <Like toggleText={this.toggleText} liked={liked} />
      </div>
    );
  }
}

export default Quote;

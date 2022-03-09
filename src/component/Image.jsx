import React, { Component } from "react";

class Image extends Component {
  render() {
    const { image } = this.props;

    return (
      <div className="image">
        <img src={image} alt="a character" />
      </div>
    );
  }
}

export default Image;

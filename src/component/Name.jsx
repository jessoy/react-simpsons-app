import React, { Component } from "react";

class Name extends Component {
  render() {
    const { name } = this.props;

    return(
    <div className="name">
      <h2>{name}</h2>
    </div>
    )
  }
}

export default Name;

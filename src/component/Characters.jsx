import React, { Component } from "react";
import Character from "./Character";
import "./characters.scss"

class Containers extends Component {
  render() {
    const { data } = this.props;

    return (
      <>
        {data.map((item, index) => {
          return (
            <div className="character" key={index}>
              <Character data={item} onLike={this.props.onLike} hideCharacter={this.props.hideCharacter} />
            </div>
          );
        })}
      </>
    );
  }
}

export default Containers;

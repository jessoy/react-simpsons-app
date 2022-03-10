import "./App.css";
import React, { Component } from "react";
import axios from "axios";
import Characters from "./component/Characters";
import "./component/styles.scss";

class App extends Component {
  state = { data: [], likedCount: 0 };

  componentDidMount() {
    this.getApiData();
  }

  getApiData = async () => {
    try {
      let result = await axios.get(
        "https://thesimpsonsquoteapi.glitch.me/quotes?count=10"
      );
      this.setState({ data: result.data });
    } catch (errors) {
      console.log(errors);
    }
  };

  onInput = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  onLike = (characterData) => {
    const currentIndex = this.state.data.findIndex((character) => {
      return (
        characterData.character === character.character &&
        characterData.quote === character.quote
      );
    });

    const copy = [...this.state.data];

    if (copy[currentIndex].liked === true) {
      copy[currentIndex].liked = undefined;
      this.updateLikedCount(false);
    } else {
      copy[currentIndex].liked = true;
      this.updateLikedCount(true);
    }

    this.setState({ data: copy });
  };

  updateLikedCount = (boolean) => {
    let newCount = boolean
      ? this.state.likedCount + 1
      : this.state.likedCount - 1;
    this.setState({ likedCount: newCount });
  };

  hideCharacter = (characterData) => {
    const { data, likedCount } = this.state;

    const deleteIndex = data.findIndex((character) => {
      return (
        characterData.character === character.character &&
        characterData.quote === character.quote
      );
    });

    this.setState({ deleteIndex: deleteIndex });

    if (deleteIndex >= 0 && likedCount > 0) {
      data.splice(deleteIndex, 1);
      this.updateLikedCount(false);
      this.setState({ deleteIndex: -1 });
    } else {
      data.splice(deleteIndex, 1);
    }
  };

  render() {
    const { data, searchTerm, likedCount } = this.state;

    let filtered = [...data];

    if (searchTerm) {
      filtered = filtered.filter((item) =>
        item.character.toLowerCase().includes(searchTerm)
      );
    }

    return (
      <>
        <div className="searchParams">
          <p>Search Here:</p>
          <input type="text" onInput={this.onInput}></input>
          <button onClick={this.onClick}>Search</button>
          <p>You like {likedCount} quotes</p>
        </div>

        <div className="container">
          {data ? (
            <Characters
              data={filtered}
              onLike={this.onLike}
              hideCharacter={this.hideCharacter}
            />
          ) : (
            <p>Awaiting Data</p>
          )}
        </div>
      </>
    );
  }
}

export default App;

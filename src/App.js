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
    let result = await axios.get(
      "https://thesimpsonsquoteapi.glitch.me/quotes?count=10"
    );
    this.setState({ data: result.data });
  };

  onInput = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  onLike = (characterData) => {
    const currentIndex = this.state.data.findIndex((character) => {
      return (
        characterData.character === character.character && characterData.quote === character.quote
      );
    });

    const copy = [...this.state.data];

    if (copy[currentIndex].liked === true) {
      copy[currentIndex].liked = undefined;
      
      let newCount = this.state.likedCount - 1;
      this.setState({likedCount: newCount})
    } else {
      copy[currentIndex].liked = true;

      let newCount = this.state.likedCount + 1;
      this.setState({likedCount: newCount})
    }

    this.setState({ data: copy });
    console.log(this.state)
  };

  render() {
    const { data, searchTerm } = this.state;

    let filtered = [...this.state.data];

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
          <p>You like {this.state.likedCount} quotes</p>
        </div>

        <div className="container">
          {data ? (
            <Characters data={filtered} onLike={this.onLike} />
          ) : (
            <p>Awaiting Data</p>
          )}
        </div>
      </>
    );
  }
}

export default App;

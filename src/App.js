import "./App.css";
import React, { Component } from "react";
import axios from "axios";
import Characters from "./component/Characters";
import "./component/styles.scss";

class App extends Component {
  state = {};

  componentDidMount() {
    this.getApiData();
  }

  getApiData = async () => {
    let result = await axios.get(
      "https://thesimpsonsquoteapi.glitch.me/quotes?count=10"
    );
    this.setState({ data: result.data, characters: [] });
  };

  onInput = (e) => {
    this.setState({searchTerm : e.target.value})
  }

  onClick = () => {
    // console.log("clicked")
    let character = this.state.data;
    // console.log(character)
    character = character.filter((item) => item.character.includes(this.state.searchTerm))
    this.setState({data : character})
  }

  render() {
    const { data } = this.state;
    console.log(data);
    console.log(this.state)

    return (
      <>
        <div className="searchParams">
          <p>Search Here:</p>
          <input type="text" onInput={this.onInput}></input>
          <button onClick={this.onClick}>Search</button>
        </div>

        <div className="container">
          {data ? <Characters data={data} /> : <p>Awaiting Data</p>}
        </div>
      </>
    );
  }
}

export default App;

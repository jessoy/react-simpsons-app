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
    this.setState({ data: result.data });
  };

  render() {
    const { data } = this.state;

    return (
      <>
        <div className="searchParams">
          <p>Search Here:</p>
          <input type="text"></input>
        </div>

        <div className="container">
          {data ? <Characters data={data} /> : <p>Awaiting Data</p>}
        </div>
      </>
    );
  }
}

export default App;

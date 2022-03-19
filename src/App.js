import "./App.css";
import React, { Component } from "react";
import axios from "axios";
import Characters from "./component/Characters";
import "./component/styles.scss";
import {
  findCharacterIndex,
  removeDuplicates,
  compareCharacterName,
} from "./component/utils/utils.js";
import Joi from "joi";

class App extends Component {
  state = { data: [] };
  joiResult;

  schema = {
    searchTerm: Joi.string().required().min(3).label("searchTerm"),
  };

  componentDidMount() {
    this.getApiData();
  }

  getApiData = async () => {
    try {
      let { data } = await axios.get(
        "https://thesimpsonsquoteapi.glitch.me/quotes?count=10"
      );
      const uniqueCharacters = removeDuplicates(data);
      uniqueCharacters.sort(compareCharacterName);

      this.setState({ data: uniqueCharacters });
    } catch (errors) {
      console.log(errors);
    }
  };

  onInput = async (e) => {
    const data = { searchTerm: e.target.value };
    this.setState(data);

    const _joiInstance = Joi.object(this.schema);
    try {
      await _joiInstance.validateAsync(data, {
        abortEarly: false,
      });
      this.setState({ errors: null });
    } catch (errors) {
      const errorsMod = {};

      errors.details.forEach((error) => {
        errorsMod[error.context.key] = error.message;
      });
      this.setState({ errors: errorsMod });
    }
  };

  onLike = (characterData) => {
    const { data } = this.state;
    const copy = [...data];

    const currentIndex = findCharacterIndex(characterData, data);
    copy[currentIndex].liked =
      copy[currentIndex].liked === true ? undefined : true;
    this.setState({ data: copy });
  };

  hideCharacter = (characterData) => {
    const { data } = this.state;
    const copy = [...data];

    const deleteIndex = findCharacterIndex(characterData, data);
    copy.splice(deleteIndex, 1);
    this.setState({ data: copy });
  };

  render() {
    const { data, searchTerm } = this.state;

    let filtered = [...data];

    if (searchTerm) {
      filtered = filtered.filter((item) =>
        item.character.toLowerCase().includes(searchTerm)
      );
    }

    const likedCount = data.filter((item) => {
      return item.liked === true;
    });

    return (
      <>
        <h1>The Simpsons Quote Generator</h1>
        <div className="searchParams">
          <p>Search Here:</p>
          <input type="text" name="searchTerm" onInput={this.onInput}></input>

          <button onClick={this.onClick}>Search</button>
          <p>{this.state.errors ? this.state.errors.searchTerm : null}</p>
          <p>You like {likedCount.length} quotes</p>
          <button onClick={this.getApiData}>Reload Characters</button>
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

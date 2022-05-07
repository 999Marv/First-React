import React, { Component } from "react";
import CardList from "./CardList";
import { pokemon } from "./pokemon";
import SearchBox from "./SearchBox";


class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: pokemon,
      searchfield: "",
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };
  render() {
    const filteredPokemon = this.state.pokemon.filter((pokemon) => {
      return pokemon.name
        .toLowerCase()
        .startsWith(this.state.searchfield.toLowerCase());
    });

    return (
      <div className="tc">
        <h1 className= 'titleText'>PokiFinder</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList pokemon={filteredPokemon} />
      </div>
    );
  }
}

export default App;

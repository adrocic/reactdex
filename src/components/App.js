import React, { Component } from 'react';
import axios from 'axios';
import './styles/App.css';
import PokeList from './PokeList';

class App extends Component {
  
  constructor() {
    super();
    this.state = {pokemon: []};
  }

  async componentDidMount() {
    const response = await axios.get('https://intern-pokedex.myriadapps.com/api/v1/pokemon?')
    this.setState({pokemon: response.data['data']});
  };

  render() {
    return (
      <div className="App">
        {/* backward button */}
        {/* search bar */}
        {/* forward button */}
        <PokeList 
          pokemon = {this.state.pokemon}
        />
      </div>
    );
  }
}


export default App;
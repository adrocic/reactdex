import React, { Component } from 'react';
import './styles/App.css';
import PokeList from './PokeList';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  // axios calls and setState

  render() {
    return (
      <div className="App">
        {/* backward button */}
        {/* search bar */}
        {/* forward button */}
        <PokeList />
      </div>
    );
  }
}


export default App;
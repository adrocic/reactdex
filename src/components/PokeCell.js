import React from 'react';
import './styles/PokeCell.css';


const PokeCell = () => {
  return <button className="poke-cell">
     <h1>Bulbasaur</h1>
     <hr></hr>
     <img src="https://img.pokemondb.net/sprites/x-y/normal/bulbasaur.png" alt="Bulbasaur"></img>
     <ul>
         <li>Grass</li>
         <li>Poison</li>
     </ul>
  </button>
};


export default PokeCell;

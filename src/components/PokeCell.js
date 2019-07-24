import React from 'react';
import './styles/PokeCell.css';


const PokeCell = (props) => {
  
  const name = props.name;
  const image = props.image;
  
  return (
    <div className="poke-cell">
      <h1 className="poke-cell-name">{name}</h1>
      <span className="divider"></span>
      <div className="poke-cell-image">
        <img src={image} alt={name}></img>
      </div>
      <ul>
        <li className="poke-cell-types">Grass</li>
        <li className="poke-cell-types">Poison</li>
      </ul>
    </div>
  )
};


export default PokeCell;

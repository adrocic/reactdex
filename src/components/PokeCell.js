import React from 'react';
import './styles/PokeCell.css';
import './styles/Types.css'


const PokeCell = (props) => {
  
  const id = props.id;
  const name = props.name;
  const image = props.image;
  const types = props.types;
  
  return (
    <div className="poke-cell">
      <h1 className="poke-cell-name">{name}</h1>
      <span className="divider"></span>
      <div className="poke-cell-image">
        <img src={image} alt={name}></img>
      </div>
      <ul>
        {types.map((type, index) => (
          <li key={id + index} className={'poke-cell-types-' + type}>{type}</li>
        ))}
      </ul>
    </div>
  )
};


export default PokeCell;

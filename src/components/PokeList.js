import React from 'react';
import PokeCell from './PokeCell';
import './styles/PokeList.css';

const PokeList = (props) => {
    
    return (
        <section className="poke-list">
            {props.pokemon.map((pokemon, index) => (
                <PokeCell 
                    key={pokemon.id + index}
                    id={pokemon.id}
                    name={pokemon.name}
                    image={pokemon.image}
                    types={pokemon.types}
                />
            ))}
        </section>
    )
}

export default PokeList;
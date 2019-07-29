import React from 'react';
import PokeCell from './PokeCell';
import './styles/PokeList.css';
import { Link } from 'react-router-dom';

const PokeList = (props) => {
    
    return (
        <section className="poke-list">
            {props.pokemon.map((pokemon, index) => (
                <Link key={pokemon.id + index} to={`/${pokemon.id}`} style={{ textDecoration: 'none' }}>
                    <PokeCell 
                        key={pokemon.id + index}
                        id={pokemon.id}
                        name={pokemon.name}
                        image={pokemon.image}
                        types={pokemon.types}
                    />
                </Link>
                
            ))}
        </section>
    )
}

export default PokeList;
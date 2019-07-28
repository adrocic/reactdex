import React, { useState, useEffect } from 'react';
import axios from 'axios';


const PokemonDetail = ({ match }) => {
    
    const [pokemon, setPokemon] = useState({
        types: [],
        egg_groups: [],
        abilities: [],
        stats: {}
    });

    useEffect(() => {
        fetchPokemon();
    }, []);

    const fetchPokemon = async () => {
        const res = await axios.get(`https://intern-pokedex.myriadapps.com/api/v1/pokemon/${match.params.id}`);
        setPokemon(res.data.data);
    }


    return (
        <div className="pokemon-detail">
            <h1>{pokemon.name}</h1>
            <h2>#{pokemon.id}</h2>
            <h1>{pokemon.types}</h1>
            <img src={pokemon.image} alt=""></img>
            <h2>HP: {pokemon.stats.hp}</h2>
            <h2>Speed: {pokemon.stats.speed}</h2>
            <h2>Attack: {pokemon.stats.attack}</h2>
            <h2>Defense: {pokemon.stats.defense}</h2>
            <h2>Special-Attack: {pokemon.stats["special-attack"]}</h2>
            <h2>Special-Defense: {pokemon.stats["special-defense"]}</h2>
            <h2>{pokemon.genus}</h2>
            <h2>{pokemon.description}</h2>
            <h1>Profile: </h1>
            <h2>Height: {pokemon.height} m</h2>
            <h2>Weight: {pokemon.weight} kg</h2>
            <h2>Abilites: {pokemon.abilites}</h2>
            <h2>Egg Groups: {pokemon.egg_groups}</h2>
        </div>
    )
}

export default PokemonDetail

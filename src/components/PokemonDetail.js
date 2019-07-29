import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/PokemonDetail.css'
import './styles/Types.css'
// const ColorThief = require('color-thief');


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

    // COLOR THIEF RUNNING INTO AN ISSUE WHERE WIDTH OF THE IMAGE IS UNDEFINED
    // 
    // const colorThief = new ColorThief();
    // console.log(pokemon.image)
    // const stopYouThief = colorThief.getColor(pokemon.image)
    // const detailPageStyle = {
    //     color: `rgb(${stopYouThief})`
    // }

    return (
        <div className="pokemon-detail">
            <div className="name-header">{pokemon.name}</div>

            <div className="pokemon-name">
                <h2>{pokemon.name} #{pokemon.id}</h2>
                <ul>
                    {pokemon.types.map((type, index) => (
                        <li key={pokemon.id + index} className={'poke-cell-types-' + type} style={{ margin: 0 }}>{type}</li>
                    ))}
                </ul>
            </div>
            <hr/>
            <div className="pokemon-image-stats">
                <img src={pokemon.image} alt=""></img>
                <div className="pokemon-stats">
                    <h4>HP: {pokemon.stats.hp}</h4>
                    <h4>Speed: {pokemon.stats.speed}</h4>
                    <h4>Attack: {pokemon.stats.attack}</h4>
                    <h4>Defense: {pokemon.stats.defense}</h4>
                    <h4>Special-Attack: {pokemon.stats["special-attack"]}</h4>
                    <h4>Special-Defense: {pokemon.stats["special-defense"]}</h4>
                </div>
            </div>
            <div className="pokemon-description">
                <h3>{pokemon.genus}</h3>
                <h4>{pokemon.description}</h4>
            </div>
            <div className="pokemon-profile">
                <h3 className="seperator"> Profile </h3>
                <h4>Height: {pokemon.height} m</h4>
                <h4>Weight: {pokemon.weight} kg</h4>
                <h4>Abilites: {pokemon.abilities} </h4>
                <h4>Egg Groups: {pokemon.egg_groups}</h4>
            </div>
        </div>
    )
}

export default PokemonDetail

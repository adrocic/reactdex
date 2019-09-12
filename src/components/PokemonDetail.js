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

    const hp = pokemon.stats.hp;
    const speed = pokemon.stats.speed;
    const attack = pokemon.stats.attack;
    const defense = pokemon.stats.defense;
    const specialAttack = pokemon.stats["special-attack"];
    const specialDefense = pokemon.stats["special-defense"];

    const hpBar = hp / 250 * 100
    const speedBar = speed / 250 * 100
    const attackBar = attack / 250 * 100
    const defenseBar = defense / 250 * 100
    const specialAttackBar = specialAttack / 250 * 100
    const specialDefenseBar = specialDefense / 250 * 100

    const statContainer = {
        backgroundColor: 'rgb(219, 219, 219)',
        width: '100%',
    }

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
                <div className="pokemon-image">
                    <img src={pokemon.image} alt=""></img>
                </div>
                <div className="pokemon-stats">
                    <h4>HP: </h4>
                    <h4>Speed: </h4>
                    <h4>Attack: </h4>
                    <h4>Defense: </h4>
                    <h4>Special-Attack: </h4>
                    <h4>Special-Defense: </h4>
                </div>
                <div className="pokemon-stat-bars">
                    <div style={statContainer}><div style={{ width: hpBar + '%', backgroundColor: 'rgb(85, 166, 156)', marginBottom: '5px' }}>{hp}</div></div>
                    <div style={statContainer}><div style={{ width: speedBar + '%', backgroundColor: 'rgb(85, 166, 156)', marginBottom: '5px' }}>{speed}</div></div>
                    <div style={statContainer}><div style={{ width: attackBar + '%', backgroundColor: 'rgb(85, 166, 156)', marginBottom: '5px' }}>{attack}</div></div>
                    <div style={statContainer}><div style={{ width: defenseBar + '%', backgroundColor: 'rgb(85, 166, 156)', marginBottom: '5px' }}>{defense}</div></div>
                    <div style={statContainer}><div style={{ width: specialAttackBar + '%', backgroundColor: 'rgb(85, 166, 156)', marginBottom: '5px' }}>{specialAttack}</div></div>
                    <div style={statContainer}><div style={{ width: specialDefenseBar + '%', backgroundColor: 'rgb(85, 166, 156)', marginBottom: '5px' }}>{specialDefense}</div></div>
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
                <h4>Abilities: {pokemon.abilities.join(", ")} </h4>
                <h4>Egg Groups: {pokemon.egg_groups.join(", ")}</h4>
            </div>
        </div>
    )
}

export default PokemonDetail

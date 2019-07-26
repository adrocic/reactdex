import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import './styles/SearchPokemon.css';


const SearchPokemon = () => {
    return (
        <div className="search-pokemon-container">
            <input className="search-bar" type="text" placeholder="Pokémon" ></input>
        </div>
    )
}

export default SearchPokemon

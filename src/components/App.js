import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Pagination from './Pagination';
import PokeList from './PokeList';
import PokemonDetail from './PokemonDetail';
import axios from 'axios';
import './styles/App.css';


const App = () => {
  
// useState hooks
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState([false]);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(15);
  const[search, setSearch] = useState("");
  const[searchedCards, setSearchedCards] = useState("");
  const[showDeleteButton, setShowDeleteButton] = useState(false);


// API call useEffect hook which updates the URL whenever currentPage state is updated
// This one is for the the general list of pokemon
  useEffect(() => {
    const fetchCards = async () => {
      setLoading(true);
      const res = await axios.get(`https://intern-pokedex.myriadapps.com/api/v1/pokemon/?page=${currentPage}`);
      setCards(res.data['data']);
      setLoading(false);
    }

    fetchCards();
  }, [currentPage] );

// API call useEffect hook which updates the URL whenever searchedCards is updated
// This one is for the individual cards searched
  useEffect(() => {
    const fetchSearchedCards = async () => {
      const res = await axios.get(`https://intern-pokedex.myriadapps.com/api/v1/pokemon/?name=${searchedCards}`);
      setCards(res.data['data']);
    }

    fetchSearchedCards();
  }, [searchedCards] );


// Paginate function which updates currentPage based on which arrow is clicked
  const paginate = (pageNumber) => {
    if (pageNumber < 1) {
      pageNumber = 1;
    }
    if (pageNumber > 36) {
      pageNumber = 36;
    }
    setCurrentPage(pageNumber);
  }

// Updates the state of search on each keystroke based on the form event of onChange 
  const filterSearch = e => {
    setSearch(e.target.value);
    setShowDeleteButton(true);
  }

// Updates the state of searchedCards based on the current value of the state: search
  const updateSearch = e => {
    e.preventDefault();
    setSearchedCards(search);
  }

// Updates the state of search and clears it
  const clearSearch = e => {
    setSearch("");
    setSearchedCards("");
    setCurrentPage(1);
    setShowDeleteButton(false);
  }
  

  return (
    <Router>
      <div className="App">
        {/* Searchbar form */}
        <form onSubmit={updateSearch} className="search-bar">
          <input 
            className="search-bar" 
            type="text" 
            value={search} 
            onChange={filterSearch}
            placeholder="Pokemon" />

          {showDeleteButton
          ?  
            <input
            className="delete-strokes"
            type="button"
            value="X"
            onClick={clearSearch}
            />
          : null }
        </form>
        <Pagination cardsPerPage={cardsPerPage} paginate={paginate} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        <Switch>
          <Route 
            path="/" 
            exact 
            render={(props) => <PokeList {...props } pokemon = {cards} loading={loading} /> }
          />
          <Route 
            path="/:id"
            component={PokemonDetail}
          />
        </Switch>
      </div>
    </Router>

  );
};


export default App;
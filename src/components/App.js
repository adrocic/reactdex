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
  const [cardsMeta, setCardsMeta] = useState([]);
  const [loading, setLoading] = useState([false]);
  const [currentPage, setCurrentPage] = useState(1);
  const[search, setSearch] = useState("");
  const[searchQuery, setSearchQuery] = useState("");
  const[showDeleteButton, setShowDeleteButton] = useState(false);
  const[showPaginationButtons, setShowPaginationButtons] = useState(true);


// API call useEffect hook which updates the URL whenever currentPage state is updated
// This one is for the the general list of pokemon
  useEffect(() => {
    const fetchCards = async () => {
      setLoading(true);
      const res = await axios.get(
        `https://intern-pokedex.myriadapps.com/api/v1/pokemon/?page=${currentPage}&name=${searchQuery}`
      );
      setCards(res.data['data']);
      setCardsMeta(res.data['meta']);
      setLoading(false);
    }
      fetchCards();
  }, [currentPage, searchQuery] );

// Paginate function which updates currentPage based on which arrow is clicked
  const paginate = (pageNumber) => {
    if (pageNumber < 1) {
      pageNumber = 1;
    }
    if (pageNumber > cardsMeta.last_page) {
      pageNumber = cardsMeta.last_page;
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
    setCurrentPage(1);
    setSearchQuery(search);
  }

// Updates the state of search and clears it
  const clearSearch = e => {
    setSearch("");
    setSearchQuery("");
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
            placeholder="Pokemon" 
          />
          {showDeleteButton &&
            <input
            className="delete-strokes"
            type="button"
            value="X"
            onClick={clearSearch}
            /> 
          }
        </form>
        
        <Switch>
          <Route 
            path="/" 
            exact 
            render={(props) => 
              <div className="pagination-pokelist-wrapper">
                <Pagination paginate={paginate} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
                <PokeList {...props } pokemon = {cards} loading={loading} />
              </div>
            }
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
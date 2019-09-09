import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Pagination from './Pagination';
import PokeList from './PokeList';
import SearchPokemon from './SearchPokemon';
import PokemonDetail from './PokemonDetail';
import axios from 'axios';
import './styles/App.css';


const App = () => {
  
// useState hooks
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState([false]);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(15);


// API call useEffect hook which updates the URL whenever currentPage state is updated
  useEffect(() => {
    const fetchCards = async () => {
      setLoading(true);
      const res = await axios.get(`https://intern-pokedex.myriadapps.com/api/v1/pokemon/?page=${currentPage}`);
      setCards(res.data['data']);
      setLoading(false);
    }

    fetchCards();
  }, [currentPage] );


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
  

  return (
    <Router>
      <div className="App">
        <SearchPokemon />
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
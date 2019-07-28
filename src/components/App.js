import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Pagination from './Pagination';
import PokeList from './PokeList';
import SearchPokemon from './SearchPokemon';
import PokemonDetail from './PokemonDetail';
import axios from 'axios';
import './styles/App.css';


const App = () => {
  
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState([false]);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(12);

  useEffect(() => {
    const fetchCards = async () => {
      setLoading(true);
      const res = await axios.get('https://intern-pokedex.myriadapps.com/api/v1/pokemon?');
      setCards(res.data['data']);
      setLoading(false);
    }

    fetchCards();
  }, [] );

  // get current cards
  const totalCards = cards.length;
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);

  const paginate = (pageNumber) => {
    if (pageNumber < 1) {
      pageNumber = 1;
    }
    setCurrentPage(pageNumber);
  }
  return (
    <Router>
      <div className="App">
        <SearchPokemon />
        <Pagination cardsPerPage={cardsPerPage} totalCards={totalCards} paginate={paginate} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        <Switch>
          <Route 
            path="/" 
            exact 
            render={(props) => <PokeList {...props } pokemon = {currentCards} loading={loading} /> }
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
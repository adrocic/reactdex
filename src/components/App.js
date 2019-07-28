import React, { useState, useEffect } from 'react';
import Pagination from './Pagination'
import PokeList from './PokeList';
import SearchPokemon from './SearchPokemon'
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
    <div className="App">
      {/* backward button */}
      <SearchPokemon />
      <Pagination cardsPerPage={cardsPerPage} totalCards={totalCards} paginate={paginate} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      {/* forward button */}
      <PokeList pokemon = {currentCards} loading={loading} />
      
    </div>
  );
};


export default App;
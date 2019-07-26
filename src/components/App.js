import React, { useState, useEffect } from 'react';
import Pagination from './Pagination'
import PokeList from './PokeList';
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

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
 
  return (
    <div className="App">
      {/* backward button */}
      {/* search bar */}
      {/* forward button */}
      <PokeList pokemon = {currentCards} loading={loading} />
      <Pagination cardsPerPage={cardsPerPage} totalCards={totalCards} paginate={paginate}/>
    </div>
  );
};


export default App;
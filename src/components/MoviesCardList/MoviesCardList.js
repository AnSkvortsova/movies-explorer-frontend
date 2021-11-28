import { React, useState, useEffect } from 'react';

import { MoviesCard } from '../MoviesCard/MoviesCard';

export function MoviesCardList(props) {
  const width = window.innerWidth;
  const [elseButton, setElseButtonState] = useState(false);
  const [movieNumber, setMovieNumberState] = useState(7);
  const [number, setNumberState] = useState(7);

  const addCards = props.cardsData.slice(0, movieNumber)

  const getElseButtonState = () => {
    if((props.cardsData.length <= 7) || (props.cardsData.length === addCards.length)) {
      return setElseButtonState(false);
    }
    setElseButtonState(true);
  };

  function handleElseButton() {
    setMovieNumberState(movieNumber + number);
  };

  useEffect(() => {
    getElseButtonState()
  });

  useEffect(() => {
    if(width > 740) {
      setNumberState(7)
    }
    if(width < 740) {
      setNumberState(5)
    }
  }, [width]);

  return (
    <section className="moviesCardList app__section">
      {addCards.map((card) => (
        <MoviesCard 
        key={card.id ? card.id : card._id}
        card={card}
        saveMovie={props.saveMovie}
        savedCards={props.savedCards}
        deleteMovie={props.deleteMovie} />
      ))}
      {elseButton 
      ? <button 
          className="moviesCardList__button" 
          onClick={handleElseButton} 
          aria-label="ещё" 
          >Ещё</button> 
      : ''}
    </section>
  );
}
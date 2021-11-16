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

  console.log(props.cardsData)

  return (
    <section className="moviesCardList app__section">
      {!props.cardsData.length === 0 ? (<p className="moviesCardList__text">Ничего не найдено</p>) : ''}
      {addCards.map((card) => (
        <MoviesCard 
        key={card.id}
        card={card}
        />
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
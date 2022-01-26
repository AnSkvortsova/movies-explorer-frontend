import { React, useState, useEffect } from 'react';

import { MoviesCard } from '../MoviesCard/MoviesCard';
import { DESCTOP_ADDITIONAL_CARDS } from '../../utils/constance';
import { MOBILE_ADDITIONAL_CARDS } from '../../utils/constance';

export function MoviesCardList(props) {
  const width = window.innerWidth;
  const [elseButton, setElseButtonState] = useState(false);
  const [movieNumber, setMovieNumberState] = useState(DESCTOP_ADDITIONAL_CARDS);
  const [number, setNumberState] = useState(DESCTOP_ADDITIONAL_CARDS);

  const renderList = defineRenderList();
  const addCards = renderList.slice(0, movieNumber);

  function defineRenderList() {
    if(props.isShortMovie) {
      return props.shortCards;
    }
    if(props.page === 'saved-movies' && props.query.input !== '' && props.sortedSavedCards.length !== 0) {
      return props.sortedSavedCards;
    }
    return props.cardsData;
  };

  const getElseButtonState = () => {
    if((renderList.length <= DESCTOP_ADDITIONAL_CARDS) || (renderList.length === addCards.length)) {
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
      setNumberState(DESCTOP_ADDITIONAL_CARDS)
    }
    if(width < 740) {
      setNumberState(MOBILE_ADDITIONAL_CARDS)
    }
  }, [width]);

  return (
    <section className="moviesCardList app__section">
      {addCards.map((card) => (
        <MoviesCard 
        key={card.id ? card.id : card._id}
        card={card}
        page={props.page}
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
      
      {renderList.length === 0 ? (<p className="moviesCardList__text">Ничего не найдено</p>) : null}
    </section>
  );
}
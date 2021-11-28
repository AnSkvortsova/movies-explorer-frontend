import React, { useState } from 'react/cjs/react.development';

import { getTime } from '../../utils/getTime';

export function MoviesCard(props) {
  const [isLike, setLikeState] = useState(false);

  function handleLikeClick() {
    if (isLike) {
      let deletedCard = props.savedCards.find((item) => item.data.movieId === props.card.id);
      console.log(deletedCard)
      props.deleteMovie(deletedCard.data._id);
      return setLikeState(false);
    }
    props.saveMovie(props.card)
    setLikeState(true);
  };

  console.log(props.savedCards)
  return (
    <section className="moviesCard app__section">
      <div className="moviesCard__content">
        <a className="moviesCard__link" href={props.card.trailerLink} target="_blank" rel="noreferrer">
          <div className="moviesCard__text">
            <h3 className="moviesCard__title">{props.card.nameRU}</h3>
            <p className="moviesCard__subtitle">{getTime(props.card.duration)}</p>
          </div>
        </a>
        <button 
        className={`moviesCard__like ${isLike ? "moviesCard__like_active" : ""}`} 
        type="button"
        onClick={handleLikeClick} 
        aria-label="лайк" ></button>
      </div>
      <a className="moviesCard__link" href={props.card.trailerLink} target="_blank" rel="noreferrer">
        <img className="moviesCard__img" src={`https://api.nomoreparties.co${props.card.image.url}`} alt="кадр фильма" />
      </a>
    </section>
  );
};

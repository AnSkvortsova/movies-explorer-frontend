import React, { useEffect, useState } from 'react/cjs/react.development';

import { getTime } from '../../utils/getTime';

export function MoviesCard(props) {
  const [isLike, setLikeState] = useState(false);

  useEffect(() => {
    setLikeState(props.savedCards.some((item) => item.movieId === props.card.id))
  }, [props.card.id, props.savedCards]);

  function handleLikeClick() {
    if(props.page === "movies") {
      if (isLike) {
        let dislikedCard = props.savedCards.find((item) => item.movieId === props.card.id);
        props.deleteMovie(dislikedCard._id);
        return setLikeState(false);
      }
      props.saveMovie(props.card)
      return setLikeState(true);
      }
    let deletedCard = props.savedCards.find((item) => item.movieId === props.card.movieId);
    props.deleteMovie(deletedCard._id);
  };

  const buttonClassName = props.page === "movies" 
  ? `moviesCard__like ${isLike ? "moviesCard__like_active" : ""}` 
  : `moviesCard__like moviesCard__like_delete`;

  const imagePath = props.page === "movies" 
  ? `https://api.nomoreparties.co${props.card.image.url}` 
  : `${props.card.image}`;

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
        className={buttonClassName} 
        type="button"
        onClick={handleLikeClick} 
        aria-label="лайк" ></button>
      </div>
      <a className="moviesCard__link" href={props.card.trailerLink} target="_blank" rel="noreferrer">
        <img className="moviesCard__img" src={imagePath} alt="кадр фильма" />
      </a>
    </section>
  );
};

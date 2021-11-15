//import movieImg from '../../images/movie.jpg';
import like from '../../images/like.svg';

export function MoviesCard(props) {
  return (
    <section className="moviesCard app__section">
      <div className="moviesCard__content">
        <div className="moviesCard__text">
          <h3 className="moviesCard__title">{props.card.nameRU}</h3>
          <p className="moviesCard__subtitle">{props.card.duration}</p>
        </div>
        <img className="moviesCard__like" src={like} alt="лайк" />
      </div>
      <img className="moviesCard__img" src={`https://api.nomoreparties.co${props.card.image.url}`} alt="кадр фильма" />
    </section>
  );
}
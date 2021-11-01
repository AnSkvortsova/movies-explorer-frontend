import movieImg from '../../images/movie.jpg';
import like from '../../images/like.svg';

export function MoviesCard() {
  return (
    <section className="moviesCard app__section app__flex">
      <div className="moviesCard__content">
        <h3 className="moviesCard__title">33 слова о дизайне</h3>
        <p className="moviesCard__subtitle">1ч 42м</p>
        <img className="moviesCard__like" src={like} alt="лайк" />
      </div>
      <img className="moviesCard__img" src={movieImg} alt="кадр фильма" />
    </section>
  );
}
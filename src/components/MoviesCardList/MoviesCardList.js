import { MoviesCard } from '../MoviesCard/MoviesCard';


export function MoviesCardList() {
  return (
    <section className="moviesCardList app__section">
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
    </section>
  );
}
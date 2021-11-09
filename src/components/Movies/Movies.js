import { SearchForm } from '../SearchForm/SearchForm';
import { MoviesCardList } from '../MoviesCardList/MoviesCardList';

export function Movies() {
  return (
    <main className="movies">
      <SearchForm />
      <MoviesCardList />
      <button className="movies__button">Ещё</button>
    </main>
  );
}
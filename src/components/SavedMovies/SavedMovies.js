import { SearchForm } from '../SearchForm/SearchForm';
import { MoviesCardList } from '../MoviesCardList/MoviesCardList';

export function SavedMovies() {
  return (
    <main className="movies">
      <SearchForm />
      <MoviesCardList />
    </main>
  );
}
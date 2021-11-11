import { SearchForm } from '../SearchForm/SearchForm';
import { MoviesCardList } from '../MoviesCardList/MoviesCardList';

export function Movies() {
  const onSearch = (query) => {

  }

  return (
    <main className="movies">
      <SearchForm onSearch={onSearch} />
      <MoviesCardList />
      <button className="movies__button">Ещё</button>
    </main>
  );
}
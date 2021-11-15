import { SearchForm } from '../SearchForm/SearchForm';
import { MoviesCardList } from '../MoviesCardList/MoviesCardList';
import { Preloader } from '../Preloader/Preloader';

export function Movies(props) {
  return (
    <main className="movies">
      <SearchForm onSearch={props.onSearch} />
      {props.isLoading ? (<Preloader />) : null}
      {props.cards.length !== 0 ? (<MoviesCardList cardsData={props.cards} />) : null}
    </main>
  );
}
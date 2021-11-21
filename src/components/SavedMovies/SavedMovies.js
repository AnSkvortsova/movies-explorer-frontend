import { Navigation } from '../Navigation/Navigation';
import { SearchForm } from '../SearchForm/SearchForm';
import { MoviesCardList } from '../MoviesCardList/MoviesCardList';
import { Footer } from '../Footer/Footer';

export function SavedMovies(props) {
  return (
    <div className="savedMovies">
      <Navigation onMenuPopup={props.onMenuPopup} />
      <main className="savedMovies__main">
        <SearchForm />
        <MoviesCardList />
      </main>
      <Footer />
    </div>
  );
}
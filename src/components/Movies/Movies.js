import { Navigation } from '../Navigation/Navigation';
import { SearchForm } from '../SearchForm/SearchForm';
import { MoviesCardList } from '../MoviesCardList/MoviesCardList';
import { Preloader } from '../Preloader/Preloader';
import { Footer } from '../Footer/Footer';

export function Movies(props) {

  return (
    <div className="movies">
      <Navigation onMenuPopup = {props.onMenuPopup} />
      <main className="movies__main">
        <SearchForm 
        query = {props.query}
        onInputChange = {props.onInputChange}
        onSubmit = {props.onSubmit}
        isShortMovie = {props.isShortMovie}
        onCheckboxChange = {props.onCheckboxChange} />

        {props.isLoading ? (<Preloader />) : null}

        {props.cards.length !== 0 ? (<MoviesCardList 
          page={props.page}
          query = {props.query}
          cardsData={props.cards} 
          saveMovie={props.saveMovie} 
          savedCards={props.savedCards}
          sortedSavedCards={props.sortedSavedCards}
          isShortMovie = {props.isShortMovie}
          shortCards = {props.shortCards}
          deleteMovie={props.deleteMovie} />) : null}
      </main>
      <Footer />
    </div>
  );
}
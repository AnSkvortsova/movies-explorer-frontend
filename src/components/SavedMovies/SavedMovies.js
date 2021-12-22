import { Navigation } from '../Navigation/Navigation';
import { SearchForm } from '../SearchForm/SearchForm';
import { MoviesCardList } from '../MoviesCardList/MoviesCardList';
import { Preloader } from '../Preloader/Preloader';
import { Footer } from '../Footer/Footer';

export function SavedMovies(props) {
  console.log('props ', props)
  return (
    <div className="savedMovies">
      <Navigation onMenuPopup={props.onMenuPopup} />
      <main className="savedMovies__main">
        <SearchForm 
        onSearch={props.onSearch}
        onCheckboxChange = {props.onCheckboxChange} />

        {props.isLoading ? (<Preloader />) : null}

        {props.cards.length !== 0 ? (<MoviesCardList 
          page={props.page}
          cardsData={props.cards} 
          savedCards={props.savedCards}
          sortedSavedCards={props.sortedSavedCards}
          deleteMovie={props.deleteMovie} />) : null}
          
        {props.cards.length === 0 ? (<p className="savedMovies__text">Ничего не найдено</p>) : null}
      </main>
      <Footer />
    </div>
  );
}
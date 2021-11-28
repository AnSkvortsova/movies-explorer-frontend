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
        onSearch={props.onSearch}
        onCheckboxChange = {props.onCheckboxChange} />
        {props.isLoading ? (<Preloader />) : null}
        {props.cards.length !== 0 ? (<MoviesCardList 
          cardsData={props.cards} 
          saveMovie={props.saveMovie} 
          savedCards={props.savedCards}
          deleteMovie={props.deleteMovie} />) : null}
        {props.cards.length === 0 ? (<p className="movies__text">Ничего не найдено</p>) : null}
      </main>
      <Footer />
    </div>
  );
}
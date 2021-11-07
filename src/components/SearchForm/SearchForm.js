import { FilterCheckbox } from '../FilterCheckbox/FilterCheckbox';
import searchIcon from '../../images/search-icon.svg'

export function SearchForm() {
  return (
    <section className="searchForm app__section">
      <form className="searchForm__form searchForm__flex">
        <div className="searchForm__inputSection searchForm__flex">
          <img className="searchForm__icon" src={searchIcon} alt="лупа" />
          <input className="searchForm__input" placeholder="Фильм" type="search" required />
          <button className="searchForm__button" type="button" aria-label="найти">Найти</button>
        </div>
        <div className="searchForm__checkboxSection">
          <FilterCheckbox />
        </div>
      </form>
      <div className="searchForm__checkboxMobile">
        <FilterCheckbox />
      </div>  
      <div className="app__lineG"></div>
    </section>
  );
}

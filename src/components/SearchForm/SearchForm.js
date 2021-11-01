import { FilterCheckbox } from '../FilterCheckbox/FilterCheckbox';
import searchIcon from '../../images/search-icon.svg'

export function SearchForm() {
  return (
    <section className="searchForm app__section">
      <forma className="searchForm__forma app__flex app__flex_center">
        <div className="searchForm__inputSection app__flex app__flex_center">
          <img className="searchForm__icon" src={searchIcon} alt="лупа" />
          <input className="searchForm__input" placeholder="Фильм" type="search" required />
          <button className="searchForm__button" type="button">Найти</button>
        </div>
        <div className="searchForm__checkboxSection">
          <FilterCheckbox />
        </div>
      </forma>
    </section>
  );
}
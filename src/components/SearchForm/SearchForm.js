import React from 'react';

import { FilterCheckbox } from '../FilterCheckbox/FilterCheckbox';
import searchIcon from '../../images/search-icon.svg'

export function SearchForm(props) {
  const { input, validate } = props.query;

  function handleInputChange(evt) {
    props.onInputChange(evt)
  };

  function handleSubmit(evt) {
    props.onSubmit(evt);
  };

  return (
    <section className="searchForm app__section">
      <form className="searchForm__form searchForm__flex">
        <div className="searchForm__inputSection searchForm__flex">
          <img className="searchForm__icon" src={searchIcon} alt="лупа" />
          <input 
            className="searchForm__input" 
            placeholder="Фильм" 
            type="search" 
            value={input || ''}
            onChange={handleInputChange}
            required />
          {validate && (
            <span className="searchForm__error">
              Нужно ввести ключевое слово
            </span>
          )}

          <button 
            className="searchForm__button" 
            type="submit" 
            aria-label="найти"
            onClick={handleSubmit}
            >Найти</button>
        </div>
        <div className="searchForm__checkboxSection">
          <FilterCheckbox query = {props.query} onCheckboxChange = {props.onCheckboxChange} />
        </div>
      </form>
      <div className="searchForm__checkboxMobile">
        <FilterCheckbox query = {props.query} onCheckboxChange = {props.onCheckboxChange} />
      </div>  
      <div className="app__lineG"></div>
    </section>
  );
}

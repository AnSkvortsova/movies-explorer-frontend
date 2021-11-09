import React from 'react';
import { NavLink } from 'react-router-dom';

import navIcon from '../../images/nav-icon.svg';
import { Logo } from '../Logo/Logo';
import { AccountButton } from '../AccountButton/AccountButton';

export function Navigation(props) {
  return (
    <nav className="nav app__section">
      <Logo />
      <ul className="nav__list">
        <li className="nav__link">
          <NavLink to="/movies" className="nav__linkPassive" activeClassName="nav__linkActive">Фильмы</NavLink>
        </li>
        <li className="nav__link">
          <NavLink to="/saved-movies" className="nav__linkPassive" activeClassName="nav__linkActive">Сохранённые фильмы</NavLink>
        </li>
      </ul>
      <div className="nav__account">
        <AccountButton />
      </div>
      <button className="nav__menu" type="button" aria-label="открыть меню" onClick={props.onMenuPopup}>
        <img className="nav__icon" src={navIcon} alt="иконка навигации" />
      </button>
    </nav>
  );
}
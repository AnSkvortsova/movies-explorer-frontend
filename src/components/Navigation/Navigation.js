import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import accountIcon from '../../images/account-icon.svg';
import { Logo } from '../Logo/Logo';

export function Navigation() {
  return (
    <nav className="nav app__section app__flex app__flex_center">
      <Logo />
      <ul className="nav__list">
        <li className="nav__link"><NavLink to="/movies" className="nav__linkPassive" activeClassName="nav__linkActive">Фильмы</NavLink> </li>
        <li className="nav__link"><NavLink to="/saved-movies" className="nav__linkPassive" activeClassName="nav__linkActive">Сохранённые фильмы</NavLink> </li>
      </ul>
      <Link to="/profile" className="nav__account">
          Аккаунт
          <img className="nav__accountIcon" src={accountIcon} alt="иконка аккаунта" />
      </Link>
    </nav>
  );
}
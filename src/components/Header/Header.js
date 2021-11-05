import React from 'react';
import { Link } from 'react-router-dom';

import { Logo } from '../Logo/Logo';

export function Header() {
  return (
    <header className="header app__section">
      <Logo />
      <ul className="header__list">
        <li className="header__item"><Link to="/signup" className="header__link">Регистрация</Link></li>
        <li className="header__item"><Link to="/signin" className="header__link">Войти</Link></li>
      </ul>
    </header>
  );
}
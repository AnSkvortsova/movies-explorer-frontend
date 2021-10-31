

import logo from '../../images/logo.svg';

export function Header() {
  return (
    <header className="header app__section app__flex">
      <img className="header__logo" src={logo} alt="логотип" />
      <div className="header__authButtons">
        <button className="header__authButton">Регистрация</button>
        <button className="header__authButton">Войти</button>
      </div>
    </header>
  );
}
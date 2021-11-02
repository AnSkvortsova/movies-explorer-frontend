import { Logo } from '../Logo/Logo';

export function Header() {
  return (
    <header className="header app__section app__flex">
      <Logo />
      <div className="header__authButtons">
        <button className="header__authButton">Регистрация</button>
        <button className="header__authButton">Войти</button>
      </div>
    </header>
  );
}
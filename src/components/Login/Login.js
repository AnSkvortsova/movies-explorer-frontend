import React from 'react';
import { Link } from 'react-router-dom';

import { Logo } from '../Logo/Logo';

export function Login() {
  return (
    <article className="input">
      <Logo />
      <h1 className="input__title">Рады видеть!</h1>
      <form className="input__form">
        <fieldset className="input__fieldset">
          <div className="input__wrapper">
            <label className="input__label" for="userName">Имя</label>
            <input className="input__content" id="userName" placeholder="Виталий" />
          </div>
          <div className="input__wrapper">
            <label className="input__label" for="userMail">E-mail</label>
            <input className="input__content" id="userMail" placeholder="pochta@yandex.ru" />
          </div>
        </fieldset>
        <button className="input__button">Войти</button>
      </form>
      <p className="input__text">
        Ещё не зарегистрированы?
        <Link className="input__link" to="/signup">Регистрация</Link>
      </p>
    </article>
  );
}